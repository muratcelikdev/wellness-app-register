import * as S from 'components/input/Input.styles';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...rest }: InputProps) => {
  // @ts-ignore
  return <S.Input className={className} {...rest} />;
};

export default Input;
