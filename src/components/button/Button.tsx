import * as S from 'components/button/Button.styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  buttonText: string;
}

const Button = ({ buttonText, ...rest }: ButtonProps): JSX.Element => {
  // @ts-ignore
  return <S.Button {...rest}>{buttonText}</S.Button>;
};

export default Button;
