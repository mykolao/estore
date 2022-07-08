import { initCategory } from 'store/category/thunks/initCategory';
import { loadCategory } from 'store/category/thunks/loadCategory';
import { selectCategory } from 'store/category/thunks/selectCategory';

export const categoryThunks = { initCategory, selectCategory, loadCategory };
