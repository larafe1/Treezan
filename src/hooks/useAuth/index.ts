import { useContext } from 'react';

import { AuthContext } from '@/providers';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
