import { connect } from 'react-redux';

import { WithMinicartActions } from 'store/minicart/hoc/withMinicartActions/types';
import { minicartThunks } from 'store/minicart/thunks';

const dispatch: WithMinicartActions = minicartThunks;

export const withMinicartActions = connect(null, dispatch);
