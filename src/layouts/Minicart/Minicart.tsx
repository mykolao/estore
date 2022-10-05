import { PureComponent } from 'react';

import MinicartNav from 'components/MinicartNav';
import MinicartSummary from 'components/MinicartSummary';
import { MinicartStyled } from 'layouts/Minicart/Minicart.styled';
import MinicartItemList from 'layouts/MinicartItemList';

export class Minicart extends PureComponent {
  render() {
    return (
      <MinicartStyled>
        <div className="backdrop" />
        <div className="minicart">
          <MinicartSummary>
            <MinicartItemList />
          </MinicartSummary>
          <MinicartNav />
        </div>
      </MinicartStyled>
    );
  }
}
