import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black.light};
`;
