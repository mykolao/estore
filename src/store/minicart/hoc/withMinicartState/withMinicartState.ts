import { connect } from 'react-redux';

import { WithMinicartState } from 'store/minicart/hoc/withMinicartState/types';
import { RootState } from 'store/types';

const state = ({ minicart }: RootState): WithMinicartState => minicart;

export const withMinicartState = connect(state);
