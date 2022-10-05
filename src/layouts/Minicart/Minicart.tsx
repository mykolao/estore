import { PureComponent } from 'react';

import MinicartNav from 'components/MinicartNav';
import MinicartSummary from 'components/MinicartSummary';
import { MinicartStyled } from 'layouts/Minicart/Minicart.styled';
import MinicartItemList from 'layouts/MinicartItemList';

interface Props {
  onHide: () => void;
}

export class Minicart extends PureComponent<Props> {
  render() {
    const { onHide } = this.props;
    return (
      <MinicartStyled>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button className="backdrop" type="button" onClick={onHide} />
        <div className="minicart">
          <MinicartSummary>
            <MinicartItemList />
          </MinicartSummary>
          <MinicartNav onClick={onHide} />
        </div>
      </MinicartStyled>
    );
  }
}
