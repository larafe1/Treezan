import styled, { css } from 'styled-components';

import type { CardStyleProps } from './types';

export const Wrapper = styled.div<CardStyleProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  display: flex;
  flex-direction: column;

  border-radius: ${({ rounded, theme }) =>
    rounded ? theme.shapes.lg : theme.shapes.sharp};

  background-color: ${({ theme }) => theme.colors.shapeDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 100%;

    border-radius: unset;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  ${({ theme }) => css`
    border-radius: ${theme.shapes.md} ${theme.shapes.md} 0 0;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 10%;

    border-radius: unset;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.div`
  width: 90%;
  height: 85%;

  align-self: center;

  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 90%;

    border-radius: unset;
  }
`;
