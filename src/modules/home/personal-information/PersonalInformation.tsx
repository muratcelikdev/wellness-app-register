import { useTranslation } from 'react-i18next';

import StepperButtons from 'components/stepper-buttons/StepperButtons';
import Input from 'components/input/Input';
import { useStepper } from 'context/StepperProvider';
import * as S from 'modules/home/Home.styles';

const PersonalInformation = () => {
  const { t } = useTranslation();
  const { prev } = useStepper();

  return (
    <S.Form>
      <S.Heading>{t('general_personalInformation_title')}</S.Heading>
      <S.MultiInputWrapper>
        <S.InputWrapper>
          <Input placeholder={t('general_name_placeholder')} type="text" />
          <Input placeholder={t('general_surname_placeholder')} type="text" />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input placeholder={t('general_email_placeholder')} type="email" />
          <Input
            placeholder={t('general_password_placeholder')}
            type="password"
          />
        </S.InputWrapper>
      </S.MultiInputWrapper>
      <StepperButtons onPrev={prev} />
    </S.Form>
  );
};

export default PersonalInformation;
