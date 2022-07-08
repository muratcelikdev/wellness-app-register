import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useImmer } from 'use-immer';

interface StepperProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

export enum Steps {
  BodyMeasures = 'bodyMeasures',
  WorkoutDays = 'workoutDays',
  FitnessGoal = 'fitnessGoal',
  PersonalInformation = 'personalInformation',
}

export enum StepStatus {
  NotReady = 'notReady',
  Completed = 'completed',
}

export enum StepperActionType {
  UpdateBodyMeasures = 'UpdateBodyMeasures',
  UpdateWorkoutDays = 'UpdateWorkoutDays',
  UpdateFitnessGoal = 'UpdateFitnessGoal',
  UpdatePersonalInformation = 'UpdatePersonalInformation',
}

export interface BodyMeasuresData {
  weight: string;
  height: string;
}

export interface WorkoutDaysData {
  selectedDays: string[];
}

export interface FitnessGoalData {
  goal: string;
}

export interface PersonalInformationData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

type PayloadData =
  | BodyMeasuresData
  | WorkoutDaysData
  | FitnessGoalData
  | PersonalInformationData;

interface StepperSource {
  bodyMeasures: {
    data?: BodyMeasuresData;
    status?: StepStatus;
  };
  workoutDays: {
    data?: WorkoutDaysData;
    status?: StepStatus;
  };
  fitnessGoal: {
    data?: FitnessGoalData;
    status?: StepStatus;
  };
  personalInformation: {
    data?: PersonalInformationData;
    status?: StepStatus;
  };
}

interface StepperProviderState<T = Steps> {
  state: StepperSource;
  activeStep: T[keyof T];
  updateState: (type: StepperActionType, payload?: PayloadData) => void;
  prev: () => void;
  next: () => void;
}

const INITIAL_STATE = {
  bodyMeasures: {
    status: StepStatus.NotReady,
  },
  workoutDays: {
    status: StepStatus.NotReady,
  },
  fitnessGoal: {
    status: StepStatus.NotReady,
  },
  personalInformation: {
    status: StepStatus.NotReady,
  },
};

const INITIAL_VALUE = {
  state: INITIAL_STATE,
  activeStep: Steps.BodyMeasures,
};

export const StepperContext = createContext<Partial<StepperProviderState>>(
  INITIAL_VALUE as StepperProviderState
);

export const useStepper = () => useContext(StepperContext);

const StepperProvider = ({ children }: StepperProviderProps) => {
  const [state, setState] = useImmer<StepperSource>(INITIAL_STATE);
  const [activeStep, setActiveStep] = useState<Steps>(Steps.BodyMeasures);

  const next = useCallback(() => {
    if (activeStep === Steps.BodyMeasures) {
      setActiveStep(Steps.WorkoutDays);
    } else if (activeStep === Steps.WorkoutDays) {
      setActiveStep(Steps.FitnessGoal);
    } else if (activeStep === Steps.FitnessGoal) {
      setActiveStep(Steps.PersonalInformation);
    }
  }, [activeStep]);

  const prev = useCallback(() => {
    if (activeStep === Steps.WorkoutDays) {
      setActiveStep(Steps.BodyMeasures);
    } else if (activeStep === Steps.FitnessGoal) {
      setActiveStep(Steps.WorkoutDays);
    } else if (activeStep === Steps.PersonalInformation) {
      setActiveStep(Steps.FitnessGoal);
    }
  }, [activeStep]);

  const updateState = useCallback(
    (type: StepperActionType, payload?: PayloadData) => {
      switch (type) {
        case StepperActionType.UpdateBodyMeasures:
          setState((prevState) => {
            prevState.bodyMeasures = {
              data: payload as BodyMeasuresData,
              status: StepStatus.Completed,
            };
          });
          break;
        case StepperActionType.UpdateWorkoutDays:
          setState((prevState) => {
            prevState.workoutDays = {
              data: payload as WorkoutDaysData,
              status: StepStatus.Completed,
            };
          });
          break;
        case StepperActionType.UpdateFitnessGoal:
          setState((prevState) => {
            prevState.fitnessGoal = {
              data: payload as FitnessGoalData,
              status: StepStatus.Completed,
            };
          });
          break;
        case StepperActionType.UpdatePersonalInformation:
          setState((prevState) => {
            prevState.personalInformation = {
              data: payload as PersonalInformationData,
              status: StepStatus.Completed,
            };
          });
          break;
      }
    },
    [state]
  );

  const value = useMemo(
    () => ({ state, activeStep, updateState, next, prev }),
    [activeStep]
  );

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};

export default StepperProvider;
