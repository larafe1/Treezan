import type { ReactNode } from 'react';

export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  created_at: Date | string;
};

export type SignInPayload = Omit<User, 'email'>;

export type SignUpPayload = User;

export type AuthContextProps = {
  isLoading: boolean;
  user: User;
  signIn: (payload: SignInPayload) => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
  signOut: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export type UserData = {
  id: string;
  created_at: string;
  updated_at: string;
} & User;

export type SignInResponse = {
  token: string;
  user: UserData;
};

export type SignUpResponse = SignInResponse;
