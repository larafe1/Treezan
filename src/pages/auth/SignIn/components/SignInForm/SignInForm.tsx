import { Button, Input } from '@/components';

import * as S from './styles';
import type { SignInFormProps } from './types';

export const SignInForm = ({ onSubmit, isLoading }: SignInFormProps) => {
  return (
    <S.FormWrapper onSubmit={onSubmit}>
      <S.InputWrapper>
        <S.Text>Usuário</S.Text>
        <Input variant="filled" name="username" />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Text>Senha</S.Text>
        <Input variant="filled" type="password" name="password" />
      </S.InputWrapper>

      <Button rounded type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <S.Text>ou crie sua conta</S.Text>
    </S.FormWrapper>
  );
};
