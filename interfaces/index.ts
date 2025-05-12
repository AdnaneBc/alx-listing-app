// interfaces/index.ts

export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
