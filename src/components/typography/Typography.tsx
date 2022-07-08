import * as S from 'components/typography/Typography.styles';

interface TypographyProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TypographyProps) => {
  return <S.Title className={className}>{children}</S.Title>;
};

export const Body = ({ children, className }: TypographyProps) => {
  return <S.Body className={className}>{children}</S.Body>;
};
