import { connect } from 'react-redux';

import { appThunks, AppState } from 'store/app';
import { RootState } from 'store/types';

const state = ({ app }: RootState): AppState => app;

export const withAppStore = connect(state, appThunks);
