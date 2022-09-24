import { TAttributeSet } from 'apollo/types';

export const selectDefaultAttributes = (attributes: TAttributeSet[]): TAttributeSet[] =>
  attributes.map(attribute => ({ ...attribute, items: [attribute.items[0]] }));
