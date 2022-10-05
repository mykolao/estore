import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { MinicartNavStyled } from 'components/MinicartNav/MinicartNav.styled';
import { PATHS } from 'routes';

const { cart, checkout } = PATHS;

export class MinicartNav extends PureComponent {
  render() {
    return (
      <MinicartNavStyled>
        <Link className="bag" to={cart}>
          View Bag
        </Link>
        <Link className="checkout" to={checkout}>
          Check Out
        </Link>
      </MinicartNavStyled>
    );
  }
}
