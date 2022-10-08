import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { TAttributeSet, TProduct } from 'apollo/types';
import CurrentPrice from 'components/CurrentPrice';
import MinicartAttributes from 'components/MinicartItemDetails/MinicartAttributes';
import { MinicartItemDetailsStyled } from 'components/MinicartItemDetails/MinicartItemDetails.styled';
import { PATHS } from 'routes';

interface Props
  extends Pick<TProduct, 'brand' | 'name' | 'prices' | 'attributes' | 'id'> {
  selectedAttributes: TAttributeSet[];
  onClick: () => void;
}

const { product } = PATHS;

export class MinicartItemDetails extends PureComponent<Props> {
  private handleClick = () => {
    const { onClick } = this.props;

    onClick();
  };

  render() {
    const { id, brand, name, prices, attributes, selectedAttributes } = this.props;
    const path = `${product}/${id}`;

    return (
      <MinicartItemDetailsStyled>
        <Link className="title" to={path} onClick={this.handleClick}>
          {brand}
          <br />
          {name}
        </Link>
        <Link className="price" to={path} onClick={this.handleClick}>
          <CurrentPrice prices={prices} />
        </Link>
        <MinicartAttributes
          attributes={attributes}
          selectedAttributes={selectedAttributes}
        />
      </MinicartItemDetailsStyled>
    );
  }
}
