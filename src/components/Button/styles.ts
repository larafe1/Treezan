import styled, { css } from 'styled-components';

import type { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem 1.5rem;
        `;
      case 'md':
        return css`
          padding: 0.8rem 2rem;
        `;
      case 'lg':
        return css`
          padding: 1rem 2.5rem;
        `;
      case 'xl':
        return css`
          padding: 1.5rem 3rem;
        `;
      default:
        return css`
          padding: 0.8rem 2rem;
        `;
    }
  }}

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

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.5;
      cursor: not-allowed;

      &:active {
        transform: none !important;
      }
    `}

  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.95);
  }
`;
