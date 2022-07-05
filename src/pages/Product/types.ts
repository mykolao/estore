import { RouteComponentProps } from 'react-router-dom';

import { PATH_PARAMS } from 'routes';

interface ProductRouteParams {
  [PATH_PARAMS.productId]: string;
}

interface ProductRoute extends RouteComponentProps<ProductRouteParams> {}

export interface ProductPageProps extends ProductRoute {}
