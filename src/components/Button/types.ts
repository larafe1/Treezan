type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSizes;
  rounded?: boolean;
  outlined?: boolean;
  color?: string;
  isLoading?: boolean;
};
