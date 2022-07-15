import { ThemeProvider } from 'styled-components';

import { AuthProvider, ToastProvider } from '@/providers';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import type { AppProviderProps } from './types';

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider />
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
