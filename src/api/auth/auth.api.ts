import { HttpResponse } from 'common/http/http.model';
import { HttpService } from 'common/http/http.service';

import {
  StartSessionRequest,
  StartSessionResponse,
  BodyMeasuresRequest,
  BodyMeasuresResponse,
  WorkoutDaysRequest,
  WorkoutDaysResponse,
  FitnessGoalResponse,
  FitnessGoaleRequest,
  CompleteRegistrationRequest,
  CompleteRegistrationResponse,
  AuthApiCalls,
} from 'api/auth/auth.model';
import authApiEndpoints from 'api/auth/auth.endpoint';

const useAuthApi = (
  httpService: InstanceType<typeof HttpService>
): AuthApiCalls => {
  return {
    sessionStart: (
      payload: StartSessionRequest
    ): HttpResponse<StartSessionResponse> =>
      httpService.mock.post(authApiEndpoints.startSession, payload),
    sendBodyMeasures: (
      payload: BodyMeasuresRequest
    ): HttpResponse<BodyMeasuresResponse> =>
      httpService.mock.post(authApiEndpoints.startSession, payload),
    setWorkoutDays: (
      payload: WorkoutDaysRequest
    ): HttpResponse<WorkoutDaysResponse> =>
      httpService.mock.post(authApiEndpoints.startSession, payload),
    setGoal: (
      payload: FitnessGoalResponse
    ): HttpResponse<FitnessGoaleRequest> =>
      httpService.mock.post(authApiEndpoints.startSession, payload),
    completeRegistration: (
      payload: CompleteRegistrationRequest
    ): HttpResponse<CompleteRegistrationResponse> =>
      httpService.mock.post(authApiEndpoints.startSession, payload),
  };
};

export default useAuthApi;
