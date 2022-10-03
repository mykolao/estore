/* eslint-disable */
import { PureComponent } from 'react';

import { TAttributeSet, TProduct } from 'apollo/types';
import { CartItemInfoStyled } from 'components/CartItem/CartItemInfo/CartItemInfo.styled';
import CurrentPrice from 'components/CurrentPrice';
import AttributeSelect from "components/AttributeSelect";

interface Props extends Pick<TProduct, 'brand' | 'name' | 'prices' | 'attributes'> {
  selectedAttributes: TAttributeSet[];
}

export class CartItemInfo extends PureComponent<Props> {
  render() {
    const { brand, name, prices, attributes, selectedAttributes } = this.props;

    const attributeLists = attributes.map(currentAttribute => {
      const selectedAttribute = selectedAttributes.find(({id}) => id === currentAttribute.id)!;

      return (<AttributeSelect key={currentAttribute.id} value={currentAttribute} selected={selectedAttribute} isActive={false} />)
    });

    return (
      <CartItemInfoStyled>
        <h3 className="brand">{brand}</h3>
        <p className="name">{name}</p>
        <p className="price">
          <CurrentPrice prices={prices} />
        </p>
        <div className="attributes">{attributeLists}</div>
      </CartItemInfoStyled>
    );
  }
}
