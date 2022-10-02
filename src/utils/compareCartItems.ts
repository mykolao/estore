import { TCartItem } from 'store/cart';
import { compareAttributeSets } from 'utils/compareAttributeSets';

export const compareCartItems = (source: TCartItem, target: TCartItem): boolean => {
  const {
    product: { id: sourceId },
    selectedAttributes: sourceAttrs,
  } = source;

  const {
    product: { id: targetId },
    selectedAttributes: targetAttrs,
  } = target;

  const areSelectedAttributesEqual = compareAttributeSets(sourceAttrs, targetAttrs);

  const areProductIdsEqual = sourceId === targetId;

  return areSelectedAttributesEqual && areProductIdsEqual;
};
