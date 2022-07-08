import AxiosMockAdapter from 'axios-mock-adapter';

import httpService from 'common/http/http.service';

export default new AxiosMockAdapter(httpService.mock, { delayResponse: 0 });
