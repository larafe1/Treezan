import { useState } from 'react';

import * as S from './styles';
import type { ModalProps } from './types';

export const Modal = ({
  open,
  w,
  h,
  title,
  withoutCloseButton,
  children
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleCloseModal = () => setIsOpen(false);

  return (
    <S.Modal open={isOpen}>
      <S.Portal>
        <S.Overlay />

        <S.ModalContent w={w} h={h}>
          <S.Header>
            <S.Title>{title}</S.Title>
            {!withoutCloseButton && (
              <S.CloseButton onClick={handleCloseModal}>
                <S.CloseIcon />
              </S.CloseButton>
            )}
          </S.Header>
          <S.Body>
            <S.Content>{children}</S.Content>
          </S.Body>
        </S.ModalContent>
      </S.Portal>
    </S.Modal>
  );
};
