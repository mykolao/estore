import styled from 'styled-components';

export const CurrencySelectStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  .symbol {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
  }

  .options {
    list-style: none;
    position: absolute;
    top: 40px;
    left: -50px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover {
    .symbol {
      color: ${({ theme: { cPrimary } }) => cPrimary};
    }
  }
`;
