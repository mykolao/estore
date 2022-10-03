import { PureComponent } from 'react';

import styled from 'styled-components';

const CartTitleStyled = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  text-transform: uppercase;

  margin-top: 80px;
`;

export class CartTitle extends PureComponent {
  render() {
    return <CartTitleStyled>Cart</CartTitleStyled>;
  }
}
