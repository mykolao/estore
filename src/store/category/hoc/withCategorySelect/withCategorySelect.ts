import { connect } from 'react-redux';

import { WithCategorySelectState } from 'store/category/hoc/withCategorySelect/types';
import { categoryThunks } from 'store/category/thunks';
import { RootState } from 'store/types';

const { selectCategory } = categoryThunks;

const state = ({
  category: { categories, currentCategory },
}: RootState): WithCategorySelectState => ({ categories, currentCategory });

const dispatch = { selectCategory };

export const withCategorySelect = connect(state, dispatch);
