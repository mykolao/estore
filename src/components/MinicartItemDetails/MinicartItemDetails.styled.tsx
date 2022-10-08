import styled from 'styled-components';

export const MinicartItemDetailsStyled = styled.div`
  & .title {
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;

    &:hover {
      text-decoration: underline;
    }
  }

  & .price {
    display: block;
    margin-top: 4px;

    font-weight: 500;
    font-size: 16px;
    line-height: 160%;

    &:hover {
      text-decoration: underline;
    }
  }
`;
