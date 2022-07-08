import { useTranslation } from 'react-i18next';

import StepperButtons from 'components/stepper-buttons/StepperButtons';
import Input from 'components/input/Input';
import { useStepper } from 'context/StepperProvider';
import * as S from 'modules/home/Home.styles';

const BodyMeasures = () => {
  const { t } = useTranslation();
  const { next } = useStepper();

  return (
    <S.Form>
      <S.Heading>{t('general_bodyMeasures_title')}</S.Heading>
      <S.InputWrapper>
        <Input
          placeholder={t('general_yourHeight_placeholder')}
          type="number"
        />
        <Input
          placeholder={t('general_yourWeight_placeholder')}
          type="number"
        />
      </S.InputWrapper>
      <StepperButtons onNext={next} />
    </S.Form>
  );
};

export default BodyMeasures;
