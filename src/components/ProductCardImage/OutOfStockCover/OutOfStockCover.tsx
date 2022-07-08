import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { OutOfStockCoverStyled } from 'components/ProductCardImage/OutOfStockCover/OutOfStockCover.styled';
import { OutOfStockCoverProps } from 'components/ProductCardImage/OutOfStockCover/types';

export class OutOfStockCover extends PureComponent<OutOfStockCoverProps> {
  render() {
    const { path } = this.props;

    return (
      <OutOfStockCoverStyled>
        <Link to={path}>out of stock</Link>
      </OutOfStockCoverStyled>
    );
  }
}
