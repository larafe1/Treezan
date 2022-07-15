import styled, { css } from 'styled-components';

import type { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem 1rem;
        `;
      case 'md':
        return css`
          padding: 0.7rem 1.25rem;
        `;
      case 'lg':
        return css`
          padding: 0.9rem 1.5rem;
        `;
      case 'xl':
        return css`
          padding: 1.1rem 1.75rem;
        `;
      default:
        return css`
          padding: 0.7rem 1.25rem;
        `;
    }
  }}

  font-size: ${({ theme }) => theme.fonts.sizes.sm};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ rounded, theme }) => (rounded ? theme.shapes.sm : 0)};

  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ color, theme }) =>
    color
      ? theme.colors[color as keyof typeof theme.colors]
      : theme.colors.primary};

  ${({ outlined, color, theme }) =>
    outlined &&
    css`
      border: 1px solid
        ${color
          ? theme.colors[color as keyof typeof theme.colors]
          : theme.colors.border};
      background-color: transparent;
    `}

  ${({ disabled, isLoading }) =>
    disabled || isLoading
      ? css`
          opacity: 0.5;
          cursor: not-allowed;

          &:active {
            transform: none !important;
          }
        `
      : null}

  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.95);
  }
`;
