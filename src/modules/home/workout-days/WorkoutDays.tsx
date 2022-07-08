import { useTranslation } from 'react-i18next';

import StepperButtons from 'components/stepper-buttons/StepperButtons';
import { useStepper } from 'context/StepperProvider';
import * as S from 'modules/home/Home.styles';

const WorkoutDays = () => {
  const { t } = useTranslation();
  const { next, prev } = useStepper();

  return (
    <S.Form>
      <S.Heading>{t('general_workoutDays_title')}</S.Heading>
      <StepperButtons onNext={next} onPrev={prev} />
    </S.Form>
  );
};

export default WorkoutDays;
