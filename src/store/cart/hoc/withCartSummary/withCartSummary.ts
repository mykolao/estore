import { connect } from 'react-redux';

import { WithCartSummaryState } from 'store/cart/hoc/withCartSummary/types';
import { RootState } from 'store/types';

const state = ({ cart: { summary } }: RootState): WithCartSummaryState => ({ summary });

export const withCartSummary = connect(state);
