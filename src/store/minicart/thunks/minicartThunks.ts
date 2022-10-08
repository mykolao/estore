import { closeMinicart } from 'store/minicart/thunks/closeMinicart';
import { toggleActivateMinicart } from 'store/minicart/thunks/toggleActivateMinicart';

export interface MinicartThunks {
  toggleActivateMinicart: () => void;
  closeMinicart: () => void;
}

export const minicartThunks = {
  toggleActivateMinicart,
  closeMinicart,
};
