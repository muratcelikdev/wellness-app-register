import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '/api',
};

export class HttpService {
  private _client: AxiosInstance;
  private _mock: AxiosInstance;
  public errorHandler?: (response: AxiosResponse) => void;

  constructor() {
    this._client = axios.create(axiosConfig);
    this._mock = axios.create(axiosConfig);
    this.applyInterceptor();
  }

  private applyInterceptor() {
    this._client.interceptors.request.use(
      (config: AxiosRequestConfig) => config
    );

    this._client.interceptors.response.use(
      (response: AxiosResponse) => response && response.data
    );

    this._mock.interceptors.request.use(
      (config) => {
        console.log('REQUEST', config.url, config.headers, config.data);
        return config;
      },
      (error: any) => {
        if (this.errorHandler) {
          this.errorHandler(error.response as AxiosResponse);
          return Promise.reject(error.response);
        }
      }
    );

    this._mock.interceptors.response.use((response: AxiosResponse) => {
      console.log('RESPONSE', response.config.url, response.data);
      return response && response.data;
    });
  }

  public get mock(): AxiosInstance {
    return this._mock;
  }
}

export default new HttpService();
