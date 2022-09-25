import { WithProductGalleryState } from 'store/product/hoc';

export interface ProductGalleryProps extends WithProductGalleryState {}

export interface ProductGalleryState {
  image: string;
}
