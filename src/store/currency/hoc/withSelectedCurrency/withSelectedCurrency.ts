import { connect } from 'react-redux';

import { WithSelectedCurrencyState } from 'store/currency/hoc/withSelectedCurrency/types';
import { RootState } from 'store/types';

const state = ({
  currency: { selectedCurrency },
}: RootState): WithSelectedCurrencyState => ({ selectedCurrency });

export const withSelectedCurrency = connect(state);
