import { SignIn } from '@/pages';
import { AppProvider } from '@/providers';

const App = () => {
  return (
    <AppProvider>
      <SignIn />
    </AppProvider>
  );
};

export default App;
