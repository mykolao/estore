import { connect } from 'react-redux';

import { WithProductGalleryState } from 'store/product/hoc/withProductGallery/types';
import { RootState } from 'store/types';

const state = ({
  product: {
    product: { gallery },
  },
}: RootState): WithProductGalleryState => ({ gallery });

export const withProductGallery = connect(state);
