export interface CategoryThunks {
  initCategories: (value: string[]) => void;
  selectCategory: (value: string) => void;
  loadCategory: (value: string) => void;
}
