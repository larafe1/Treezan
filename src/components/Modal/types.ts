import type { ReactNode } from 'react';

type Unit = 'px' | '%' | 'vh' | 'vw';

type Size = `${number}${Unit}`;

export type ModalProps = {
  open: boolean;
  w: Size;
  h: Size;
  title: string;
  withoutCloseButton?: boolean;
  children: ReactNode;
};

export type ModalStyleProps = Partial<ModalProps>;
