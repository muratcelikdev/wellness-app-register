export enum HttpResponseErrorKeys {}

export enum ApiResponseStatus {
  Success = 'success',
  Error = 'error',
}

export interface BaseResponse<T> {
  result: T;
  status: ApiResponseStatus;
  messages?: HttpResponseErrorKeys;
}

export type HttpResponse<T> = Promise<BaseResponse<T>>;
