import styled from 'styled-components';

export const CartSummaryStyled = styled.section`
  margin-top: 22px;

  .container {
    margin-top: 32px;
    display: flex;
    align-items: baseline;
    gap: 4px;

    .col {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .label {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }

    .label-total {
      font-weight: 500;
    }

    .value {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
