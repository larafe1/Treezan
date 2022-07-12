import { forwardRef, type ForwardRefRenderFunction } from 'react';

import * as S from './styles';
import type { InputProps } from './types';

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    variant = 'default',
    placeholder,
    defaultValue,
    disabled,
    error,
    ...props
  },
  ref
) => {
  return (
    <>
      <S.Input
        name={name}
        variant={variant}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={ref}
        disabled={disabled}
        error={error}
        {...props}
      />
      {!!error && <S.ErrorText>{error}</S.ErrorText>}
    </>
  );
};

export const Input = forwardRef(InputComponent);
