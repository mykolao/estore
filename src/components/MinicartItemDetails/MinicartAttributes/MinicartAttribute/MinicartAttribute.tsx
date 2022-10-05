import { PureComponent } from 'react';

import { TAttribute, TAttributeSet } from 'apollo/types';
import { MinicartColorAttributeStyled } from 'components/MinicartItemDetails/MinicartAttributes/MinicartAttribute/MinicartColorAttribute.styled';
import { MinicartTextAttributeStyled } from 'components/MinicartItemDetails/MinicartAttributes/MinicartAttribute/MinicartTextAttribute.styled';

interface Props extends Pick<TAttribute, 'value'>, Pick<TAttributeSet, 'type'> {
  isSelected: boolean;
}

export class MinicartAttribute extends PureComponent<Props> {
  render() {
    const { type, value, isSelected } = this.props;

    if (type === 'swatch') {
      return (
        <MinicartColorAttributeStyled isSelected={isSelected} value={value}>
          <div className="colorValue" />
        </MinicartColorAttributeStyled>
      );
    }

    return (
      <MinicartTextAttributeStyled isSelected={isSelected}>
        {value}
      </MinicartTextAttributeStyled>
    );
  }
}
