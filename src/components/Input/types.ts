type InputVariants = 'default' | 'filled' | 'unstyled';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  variant?: InputVariants;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
};
