import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import StepperButtons from 'components/stepper-buttons/StepperButtons';
import { Body } from 'components/typography/Typography.styles';
import { useStepper } from 'context/StepperProvider';
import * as S from 'modules/home/Home.styles';

import LoseWeight from 'assets/icons/LoseWeight.svg';
import BuildMuscle from 'assets/icons/BuildMuscle.svg';
import StayHealthy from 'assets/icons/StayHealthy.svg';

export enum FitnessGoals {
  LoseWeight = 'loseWeight',
  BuildMuscle = 'buildMuscle',
  StayHealthy = 'stayHealthy',
}

const FitnessGoal = () => {
  const { t } = useTranslation();
  const { next, prev } = useStepper();

  const [goal, setGoal] = useState<string | null>(null);

  const handleGoalChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setGoal(event.target.value);
    },
    []
  );

  console.log({ goal });

  return (
    <S.Form>
      <S.Heading>{t('general_fitnessGoal_title')}</S.Heading>
      <S.RadioGroup>
        <S.RadioItem>
          <S.Icon src={LoseWeight} alt="lose-weight" />
          <Body htmlFor="lose-weight">{t('general_loseWeight_label')}</Body>
          <S.Radio
            name="fitness-goal"
            value={FitnessGoals.LoseWeight}
            onChange={handleGoalChange}
            checked={goal === FitnessGoals.LoseWeight}
          />
        </S.RadioItem>
        <S.RadioItem>
          <S.Icon src={BuildMuscle} alt="build-muscle" />
          <Body htmlFor="build-muscle">{t('general_buildMuscle_label')}</Body>
          <S.Radio
            name="fitness-goal"
            value={FitnessGoals.BuildMuscle}
            onChange={handleGoalChange}
            checked={goal === FitnessGoals.BuildMuscle}
          />
        </S.RadioItem>
        <S.RadioItem>
          <S.Icon src={StayHealthy} alt="stay-healthy" />
          <Body htmlFor="stay-healthy">{t('general_stayHealthy_label')}</Body>
          <S.Radio
            name="fitness-goal"
            value={FitnessGoals.StayHealthy}
            onChange={handleGoalChange}
            checked={goal === FitnessGoals.StayHealthy}
          />
        </S.RadioItem>
      </S.RadioGroup>
      <StepperButtons onNext={next} onPrev={prev} />
    </S.Form>
  );
};

export default FitnessGoal;
