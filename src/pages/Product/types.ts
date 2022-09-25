import { RouteComponentProps } from 'react-router-dom';

import { PATH_PARAMS } from 'routes';
import { WithLoadProductDispatch, WithLoadProductState } from 'store/product/hoc';

interface ProductRouteParams {
  [PATH_PARAMS.productId]: string;
}

interface ProductRoute extends RouteComponentProps<ProductRouteParams> {}

export interface ProductProps
  extends ProductRoute,
    WithLoadProductState,
    WithLoadProductDispatch {}
