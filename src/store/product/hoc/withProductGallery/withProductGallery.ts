import { connect } from 'react-redux';

import { WithProductGalleryState } from 'store/product/hoc/withProductGallery/types';
import { RootState } from 'store/types';

const state = ({
  product: {
    product: { gallery, inStock },
  },
}: RootState): WithProductGalleryState => ({ gallery, inStock });

export const withProductGallery = connect(state);
