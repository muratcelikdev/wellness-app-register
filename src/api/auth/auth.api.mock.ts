import {
  StartSessionRequest,
  StartSessionResponse,
  BodyMeasuresRequest,
  BodyMeasuresResponse,
  WorkoutDaysRequest,
  WorkoutDaysResponse,
  FitnessGoaleRequest,
  FitnessGoalResponse,
  CompleteRegistrationRequest,
  CompleteRegistrationResponse,
} from 'api/auth/auth.model';
import authApiEndpoints from 'api/auth/auth.endpoint';
import httpMock from 'common/http/http.mock';
import { BaseResponse } from 'common/http/http.model';

httpMock
  .onPost(authApiEndpoints.startSession, {} as StartSessionRequest)
  .reply(200, {
    status: 'success',
    result: {},
  } as BaseResponse<StartSessionResponse>);

httpMock
  .onPost(authApiEndpoints.sendBodyMeasures, {} as BodyMeasuresRequest)
  .reply(200, {
    status: 'success',
    result: {},
  } as BaseResponse<BodyMeasuresResponse>);

httpMock
  .onPost(authApiEndpoints.setWorkoutDays, {} as WorkoutDaysRequest)
  .reply(200, {
    status: 'success',
    result: {},
  } as BaseResponse<WorkoutDaysResponse>);

httpMock
  .onPost(authApiEndpoints.setGoal, {} as FitnessGoaleRequest)
  .reply(200, {
    status: 'success',
    result: {},
  } as BaseResponse<FitnessGoalResponse>);

httpMock
  .onPost(
    authApiEndpoints.completeRegistration,
    {} as CompleteRegistrationRequest
  )
  .reply(200, {
    status: 'success',
    result: {},
  } as BaseResponse<CompleteRegistrationResponse>);
