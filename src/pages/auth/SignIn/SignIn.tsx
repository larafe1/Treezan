import { Card } from '@/components';

import { SignInForm } from './components';
import { useSignIn } from './hooks';
import * as S from './styles';

export const SignIn = () => {
  const { handleSignIn, isLoading } = useSignIn();

  return (
    <S.Wrapper>
      <Card rounded w="32rem" h="28.5rem" title="Treezan — Sign In">
        <SignInForm onSubmit={handleSignIn} isLoading={isLoading} />
      </Card>
    </S.Wrapper>
  );
};
