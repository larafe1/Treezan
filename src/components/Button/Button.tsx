import * as S from './styles';
import type { ButtonProps } from './types';

export const Button = ({
  size = 'md',
  rounded,
  outlined,
  color,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      size={size}
      rounded={rounded}
      outlined={outlined}
      color={color}
      isLoading={isLoading}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? 'Loading' : children}
    </S.Button>
  );
};
