const KEY = 'STORE_CATEGORY';

const getLocalCategory = (): string => localStorage.getItem(KEY) || '';
const setLocalCategory = (value: string): void => localStorage.setItem(KEY, value);

export const localCategory = { getLocalCategory, setLocalCategory };
