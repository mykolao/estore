import { PureComponent } from 'react';

import { TAttributeSet } from 'apollo/types';
import MinicartAttribute from 'components/MinicartItemDetails/MinicartAttributes/MinicartAttribute';
import { MinicartAttributesStyled } from 'components/MinicartItemDetails/MinicartAttributes/MinicartAttributes.styled';

interface Props {
  attributes: TAttributeSet[];
  selectedAttributes: TAttributeSet[];
}

export class MinicartAttributes extends PureComponent<Props> {
  render() {
    const { attributes, selectedAttributes } = this.props;
    return (
      <MinicartAttributesStyled>
        {attributes.map(({ id, name, type, items }) => {
          const selectedItemId = selectedAttributes.find(attr => attr.id === id)!.items[0]
            .id;

          return (
            <div className="attributeSet" key={id}>
              <div className="label">{name}:</div>
              <div className="attributeList">
                {items.map(({ id: itemId, value }) => {
                  const isSelected = selectedItemId === itemId;

                  return (
                    <MinicartAttribute
                      key={itemId}
                      isSelected={isSelected}
                      value={value}
                      type={type}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </MinicartAttributesStyled>
    );
  }
}
