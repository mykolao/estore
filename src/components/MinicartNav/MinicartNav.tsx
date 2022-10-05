import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { MinicartNavStyled } from 'components/MinicartNav/MinicartNav.styled';
import { PATHS } from 'routes';

const { cart, checkout } = PATHS;

interface Props {
  onClick: () => void;
}

export class MinicartNav extends PureComponent<Props> {
  render() {
    const { onClick } = this.props;

    return (
      <MinicartNavStyled>
        <Link className="bag" to={cart} onClick={onClick}>
          View Bag
        </Link>
        <Link className="checkout" to={checkout} onClick={onClick}>
          Check Out
        </Link>
      </MinicartNavStyled>
    );
  }
}
