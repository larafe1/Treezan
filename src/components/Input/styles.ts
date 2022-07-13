import styled, { css, keyframes } from 'styled-components';

import type { InputProps } from './types';

const slideInAnimation = keyframes`
    0% {
      opacity: 0;
      transform: 'translateY(-100%)';
    }
    100% {
      opacity: 1;
      transform: 'translateY(0%)';
    }
`;

export const Input = styled.input<InputProps>`
  width: 100%;

  padding: 1rem 1.2rem;

  font-size: ${({ theme }) => theme.fonts.sizes.md};

  border-radius: ${({ theme }) => theme.shapes.sm};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'default':
        return css`
          border: 1px solid ${theme.colors.border};
          background-color: ${theme.colors.backgroundLight};
        `;
      case 'filled':
        return css`
          border: 1px solid ${theme.colors.inputFilledBackground};
          background-color: ${theme.colors.inputFilledBackground};
        `;
      case 'unstyled':
        return css`
          border: none;
          background-color: transparent;
        `;
      default:
        return css`
          border: 1px solid ${theme.colors.border};
          background-color: ${theme.colors.background};
        `;
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.error};
    `}

  transition: border ${({ theme }) => theme.transitions.fast};

  ${({ variant, theme }) =>
    variant !== 'unstyled' &&
    css`
      &:focus {
        border: 1px solid ${theme.colors.primary};
      }
    `}
`;

export const ErrorText = styled.p`
  margin-left: 0.8rem;

  font-size: ${({ theme }) => theme.fonts.sizes.md};

  color: ${({ theme }) => theme.colors.error};

  --webkit-animation: slidein 0.5s forwards;
  --webkit-animation-delay: 2s;

  animation: ${slideInAnimation} 0.5s forwards;
`;
