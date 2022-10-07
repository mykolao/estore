import { TCurrency } from 'apollo/types';

export interface CurrencyOptionProps {
  value: TCurrency;
  onClick: (value: TCurrency) => void;
  isActive: boolean;
}
