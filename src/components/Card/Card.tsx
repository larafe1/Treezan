import * as S from './styles';
import type { CardProps } from './types';

export const Card = ({ w, h, title, rounded, children }: CardProps) => {
  return (
    <S.Wrapper w={w} h={h} rounded={rounded} role="dialog">
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
