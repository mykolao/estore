import { TAttributeSet } from 'apollo/types';

export const compareAttributeSets = (
  source: TAttributeSet[],
  target: TAttributeSet[],
): boolean => {
  if (source.length !== target.length) return false;

  let areEqual = true;

  source.forEach((attr, i) => {
    const attr2 = target[i];
    if (attr.id !== attr2.id) {
      areEqual = false;
    }

    attr.items.forEach(item => {
      const item2 = attr2.items.find(itm => item.id === itm.id);
      if (!item2 || item.value !== item2.value) {
        areEqual = false;
      }
    });
  });

  return areEqual;
};
