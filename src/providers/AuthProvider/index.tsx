import { createContext, useCallback, useEffect, useState } from 'react';

import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import config from '@/config';
import { api } from '@/services';

import type {
  AuthContextProps,
  AuthProviderProps,
  SignInPayload,
  SignInResponse,
  SignUpPayload,
  SignUpResponse,
  UserData
} from './types';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({} as UserData);

  const signIn = useCallback(async (payload: SignInPayload) => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<SignInResponse> = await api.post(
        '/sign-in',
        payload
      );
      const { token, user } = data;
      setUser(user);
      localStorage.setItem(config.userStorageKey, JSON.stringify(user));
      localStorage.setItem(config.userTokenStorageKey, token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      toast.success(`Autenticado como ${user.username}`);
    } catch (err) {
      console.error(err);
      toast.error('Algo deu errado! Tente novamente mais tarde');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = useCallback(async (payload: SignUpPayload) => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<SignUpResponse> = await api.post(
        '/sign-up',
        payload
      );
      const { token, user } = data;
      setUser(user);
      localStorage.setItem(config.userStorageKey, JSON.stringify(user));
      localStorage.setItem(config.userTokenStorageKey, token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      toast.success(`Cadastrado e autenticado como ${user.username}`);
    } catch (err) {
      console.error(err);
      toast.error('Algo deu errado! Tente novamente mais tarde');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = () => {
    setUser({} as UserData);
    localStorage.removeItem(config.userStorageKey);
    localStorage.removeItem(config.userTokenStorageKey);
    api.defaults.headers.common.Authorization = '';
    toast.success('Sessão finalizada com sucesso');
  };

  const loadLocalStorageData = useCallback(async () => {
    const token = localStorage.getItem(config.userTokenStorageKey);
    const rawUser = localStorage.getItem(config.userStorageKey);

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    if (rawUser) {
      const parsedUser: UserData = await JSON.parse(rawUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    loadLocalStorageData();
  }, [loadLocalStorageData]);

  return (
    <AuthContext.Provider value={{ isLoading, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
