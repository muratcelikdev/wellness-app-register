import { useTranslation } from 'react-i18next';

import * as S from 'components/stepper-buttons/StepperButtons.styles';
import Button from 'components/button/Button';

interface StepperButtonProps {
  onPrev?: () => void;
  onNext?: () => void;
}

const StepperButtons = ({ onPrev, onNext }: StepperButtonProps) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Button
        buttonText={t('general_back_label')}
        onClick={onPrev}
        disabled={!onPrev}
      />
      <Button
        buttonText={t('general_next_label')}
        onClick={onNext}
        disabled={!onNext}
      />
    </S.Container>
  );
};

export default StepperButtons;
