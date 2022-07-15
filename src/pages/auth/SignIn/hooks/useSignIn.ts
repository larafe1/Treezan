import { useAuth } from '@/hooks';

export const useSignIn = () => {
  const { isLoading } = useAuth();

  const handleSignIn = async () => {
    // await signIn();
    await Promise.resolve((resolve: () => void) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return { isLoading, handleSignIn };
};
