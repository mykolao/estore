import { PureComponent } from 'react';

import MinicartNav from 'components/MinicartNav';
import MinicartSummary from 'components/MinicartSummary';
import { MinicartStyled } from 'layouts/Minicart/Minicart.styled';
import MinicartItemList from 'layouts/MinicartItemList';
import {
  WithMinicartActions,
  withMinicartActions,
  WithMinicartState,
  withMinicartState,
} from 'store/minicart/hoc';

interface Props extends WithMinicartState, Pick<WithMinicartActions, 'closeMinicart'> {}

class Component extends PureComponent<Props> {
  private handleClose = () => {
    const { closeMinicart } = this.props;

    closeMinicart();
  };

  render() {
    const { isVisible } = this.props;

    if (!isVisible) return <MinicartStyled />;

    return (
      <MinicartStyled>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button className="backdrop" type="button" onClick={this.handleClose} />
        <div className="minicart">
          <MinicartSummary>
            <MinicartItemList />
          </MinicartSummary>
          <MinicartNav onClick={this.handleClose} />
        </div>
      </MinicartStyled>
    );
  }
}

export const Minicart = withMinicartActions(withMinicartState(Component));
