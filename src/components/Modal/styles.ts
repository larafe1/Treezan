import { blackA } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IoCloseSharp } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';

import type { ModalStyleProps } from './types';

const overlayShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96)
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1)
  }
`;

export const Modal = styled(DialogPrimitive.Root)``;

export const Portal = styled(DialogPrimitive.Portal)``;

export const Overlay = styled(DialogPrimitive.Overlay)`
  position: fixed;

  inset: 0;

  background-color: ${blackA.blackA9};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;

export const ModalContent = styled(DialogPrimitive.Content)<ModalStyleProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.backgroundLight};

  border-radius: ${({ theme }) => theme.shapes.md};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  &:focus {
    outline: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  margin: 0 0.5rem;

  border-radius: ${({ theme }) => theme.shapes.md};
`;

export const Close = styled(DialogPrimitive.Close)``;

export const CloseButton = styled.button`
  all: unset;

  width: 3rem;
  height: 3rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.25rem;

  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: rgba(232, 63, 91, 0.2);
  }

  &:active {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.error};
  }
`;

export const CloseIcon = styled(IoCloseSharp)`
  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.colors.error};
`;

export const Title = styled(DialogPrimitive.Title)`
  margin: 1.25rem 0 0 1.5rem;

  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
`;

export const Body = styled.div`
  margin: 3rem 2rem 1rem 3rem;
`;

export const Content = styled(DialogPrimitive.Description)`
  font-size: ${({ theme }) => theme.fonts.sizes.md};
`;
