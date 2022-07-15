import type { ReactNode } from 'react';

type Unit = 'px' | 'rem' | 'vh' | 'vw';

type Size = `${number}${Unit}`;

export type CardProps = {
  w: Size;
  h: Size;
  title: string;
  rounded?: boolean;
  children: ReactNode;
};

export type CardStyleProps = Partial<CardProps>;
