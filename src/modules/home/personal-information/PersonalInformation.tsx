import { useTranslation } from 'react-i18next';

import StepperButtons from 'components/stepper-buttons/StepperButtons';
import { useStepper } from 'context/StepperProvider';
import * as S from 'modules/home/Home.styles';

const PersonalInformation = () => {
  const { t } = useTranslation();
  const { prev } = useStepper();

  return (
    <S.Form>
      <S.Heading>{t('general_personalInformation_title')}</S.Heading>
      <StepperButtons onPrev={prev} />
    </S.Form>
  );
};

export default PersonalInformation;
