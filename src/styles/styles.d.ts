import { theme } from 'styles/styles';
import { Theme } from 'styles/types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
