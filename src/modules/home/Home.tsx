import { Steps, useStepper } from 'context/StepperProvider';

import * as S from 'modules/home/Home.styles';
import BodyMeasures from 'modules/home/body-measures/BodyMeasures';
import WorkoutDays from 'modules/home/workout-days/WorkoutDays';
import FitnessGoal from 'modules/home/fitness-goal/FitnessGoal';
import PersonalInformation from 'modules/home/personal-information/PersonalInformation';

const Home = (): JSX.Element => {
  const { activeStep } = useStepper();

  return (
    <S.HomeContainer>
      {activeStep === Steps.BodyMeasures && <BodyMeasures />}
      {activeStep === Steps.WorkoutDays && <WorkoutDays />}
      {activeStep === Steps.FitnessGoal && <FitnessGoal />}
      {activeStep === Steps.PersonalInformation && <PersonalInformation />}
    </S.HomeContainer>
  );
};

export default Home;
