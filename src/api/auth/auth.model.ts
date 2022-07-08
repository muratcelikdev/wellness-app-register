import { HttpResponse } from 'common/http/http.model';

export interface StartSessionRequest {}

export interface StartSessionResponse {
  sessionId: string;
}

export interface BodyMeasuresRequest {
  height: number;
  weight: number;
}

export interface BodyMeasuresResponse {}

export interface WorkoutDaysRequest {
  selectedDays: string[];
}

export interface WorkoutDaysResponse {}

export interface FitnessGoaleRequest {
  goal: string;
}

export interface FitnessGoalResponse {}

export interface CompleteRegistrationRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface CompleteRegistrationResponse {}

export interface AuthApiCalls {
  sessionStart: (
    payload: StartSessionRequest
  ) => HttpResponse<StartSessionResponse>;
  sendBodyMeasures: (
    payload: BodyMeasuresRequest
  ) => HttpResponse<BodyMeasuresResponse>;
  setWorkoutDays: (
    payload: WorkoutDaysRequest
  ) => HttpResponse<WorkoutDaysResponse>;
  setGoal: (payload: FitnessGoaleRequest) => HttpResponse<FitnessGoalResponse>;
  completeRegistration: (
    payload: CompleteRegistrationRequest
  ) => HttpResponse<CompleteRegistrationResponse>;
}
