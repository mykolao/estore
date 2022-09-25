import { PureComponent } from 'react';

import { TAttribute, TAttributeSet } from 'apollo/types';
import { ColorAttributeOptionStyled } from 'components/AttributeSelect/AttributeOption/ColorAttributeOption.styled';
import { TextAttributeOptionStyled } from 'components/AttributeSelect/AttributeOption/TextAttributeOption.styled';

interface Props extends TAttribute, Pick<TAttributeSet, 'type'> {
  isSelected: boolean;
  isActive: boolean;
  onClick: (id: string) => void;
}

export class AttributeOption extends PureComponent<Props> {
  private handleClick = () => {
    const { isSelected, isActive, onClick, id } = this.props;

    if (!isSelected && isActive) {
      onClick(id);
    }
  };

  render() {
    const { value, type, isSelected, isActive } = this.props;

    if (type === 'swatch')
      return (
        <ColorAttributeOptionStyled
          isSelected={isSelected}
          isActive={isActive}
          value={value}
          onClick={this.handleClick}
        >
          <div className="color-value" />
        </ColorAttributeOptionStyled>
      );

    return (
      <TextAttributeOptionStyled
        isSelected={isSelected}
        isActive={isActive}
        onClick={this.handleClick}
      >
        {value}
      </TextAttributeOptionStyled>
    );
  }
}
