import { TProduct } from 'apollo/types';

export interface WithProductGalleryState extends Pick<TProduct, 'gallery' | 'inStock'> {}
