import { Toaster } from 'react-hot-toast';
import { useTheme } from 'styled-components';

export const ToastProvider = () => {
  const { fonts } = useTheme();

  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        style: {
          fontSize: fonts.sizes.md
        }
      }}
    />
  );
};
