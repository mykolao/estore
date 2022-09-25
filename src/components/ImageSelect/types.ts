export interface ImageSelectProps {
  images: string[];
  selectedImage: string;
  onChange: (image: string) => void;
}
