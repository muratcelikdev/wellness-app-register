import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 12px 65px;
  background: ${({ theme }) => theme.colors.primary.default};
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  &:hover {
    ${({ disabled }) =>
      disabled
        ? css`
            cursor: default;
          `
        : css`
            background: ${({ theme }) => theme.colors.primary.dark};
          `}
  }
`;
