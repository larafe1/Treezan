import { Input } from '@/components';

import { AppProvider } from '@/providers';

const App = () => {
  return (
    <AppProvider>
      <Input name="hello" />
    </AppProvider>
  );
};

export default App;
