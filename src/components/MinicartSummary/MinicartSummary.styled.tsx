import styled from 'styled-components';

export const MinicartSummaryStyled = styled.div`
  width: 100%;

  & .heading {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
    }
  }

  & .sum {
    display: flex;
    justify-content: space-between;
    padding-top: 32px;

    & .label {
      font-family: 'Roboto', 'sans-serif';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }

    & .price {
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
    }
  }
`;
