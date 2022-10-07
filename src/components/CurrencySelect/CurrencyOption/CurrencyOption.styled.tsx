import styled, { css } from 'styled-components';

export const CurrencyOptionStyled = styled.li`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  width: 105px;

  text-align: left;

  padding: 8px 20px;

  &:hover {
    background-color: #eee;
  }

  ${({ className }) =>
    className === 'active' &&
    css`
      background-color: #eee;
    `}

  & .active {
    background-color: #eee;
  }
`;
