import styled from 'styled-components';

import { Title } from 'components/typography/Typography.styles';

export const HomeContainer = styled.div`
  padding: 32px 46px 42px;
  background-color: #e8e8ff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 469px;
  min-height: 695px;
`;

export const Heading = styled(Title)`
  width: 375px;
`;

export const InputWrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
