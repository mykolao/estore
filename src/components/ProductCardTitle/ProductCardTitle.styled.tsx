import styled from 'styled-components';

export const ProductCardTitleStyled = styled.div`
  & a {
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    color: ${({ theme: { cBlack } }) => cBlack};

    &:hover {
      text-decoration: underline;
    }
  }
`;
