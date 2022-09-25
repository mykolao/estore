export interface ImageOptionStyledProps {
  isSelected: boolean;
}

export interface ImageOptionProps {
  image: string;
  isSelected: boolean;
  onClick: (value: string) => void;
}
