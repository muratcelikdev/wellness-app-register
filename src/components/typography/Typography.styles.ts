import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black.default};
  text-align: center;
`;

export const Body = styled.label`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black.default};
`;
