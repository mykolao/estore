import { connect } from 'react-redux';

import { WithCurrencySelectState } from 'store/currency/hoc/withCurrencySelect/types';
import { currencyThunks } from 'store/currency/thunks';
import { RootState } from 'store/types';

const state = ({ currency }: RootState): WithCurrencySelectState => currency;

export const withCurrencySelect = connect(state, currencyThunks);
