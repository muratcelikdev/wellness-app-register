import * as S from 'components/typography/Typography.styles';

interface TitleProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return <S.Title className={className}>{children}</S.Title>;
};
