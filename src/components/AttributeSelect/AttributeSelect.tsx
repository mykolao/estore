/* eslint-disable react/require-default-props */
import { PureComponent } from 'react';

import { TAttributeSet } from 'apollo/types';
import AttributeOption from 'components/AttributeSelect/AttributeOption';
import { AttributeSelectStyled } from 'components/AttributeSelect/AttributeSelect.styled';

interface Props {
  value: TAttributeSet;
  selected: TAttributeSet;
  isActive: boolean;
  onChange?: (value: TAttributeSet) => void;
}

export class AttributeSelect extends PureComponent<Props> {
  private handleSelect = (newId: string) => {
    const { value, onChange } = this.props;

    if (!onChange) return;

    const newItems = value.items.filter(({ id }) => id === newId);

    const changedValue = {
      ...value,
      items: newItems,
    };

    onChange(changedValue);
  };

  render() {
    const {
      value: { name, items, type },
      selected: { items: selectedItemArray },
      isActive,
    } = this.props;

    const selectedItemId = selectedItemArray[0].id;

    return (
      <AttributeSelectStyled>
        <p className="label">{`${name}:`}</p>
        <div className="select">
          {items.map(({ id, value, displayValue }) => (
            <AttributeOption
              onClick={this.handleSelect}
              isActive={isActive}
              key={id}
              isSelected={id === selectedItemId}
              type={type}
              displayValue={displayValue}
              id={id}
              value={value}
            />
          ))}
        </div>
      </AttributeSelectStyled>
    );
  }
}
