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

export const MultiInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

export const RadioItem = styled.div`
  width: 360px;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;

export const RadioGroup = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.img`
  margin-right: 12px;
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    right: 20px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:checked {
    &::after {
      background-color: 1px solid ${({ theme }) => theme.colors.white};
      border: 6.5px solid ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
