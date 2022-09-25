import { PureComponent } from 'react';

import { TAttributeSet } from 'apollo/types';
import AttributeSelect from 'components/AttributeSelect';
import { ProductDescriptionAttributesStyled } from 'components/ProductDescription/ProductDescriptionAttributes/ProductDescriptionAttributes.styled';
import {
  withProductAttributes,
  WithProductAttributesDispatch,
  WithProductAttributesState,
} from 'store/product/hoc';

interface Props extends WithProductAttributesState, WithProductAttributesDispatch {}

class Component extends PureComponent<Props> {
  render() {
    const { attributes, selectedAttributes, inStock, selectAttribute } = this.props;

    return (
      <ProductDescriptionAttributesStyled>
        {attributes.map(attribute => {
          const selected = selectedAttributes.find(
            ({ id }) => attribute.id === id,
          ) as TAttributeSet;

          return (
            <AttributeSelect
              key={attribute.id}
              value={attribute}
              selected={selected}
              isActive={inStock}
              onChange={selectAttribute}
            />
          );
        })}
      </ProductDescriptionAttributesStyled>
    );
  }
}

export const ProductDescriptionAttributes = withProductAttributes(Component);
