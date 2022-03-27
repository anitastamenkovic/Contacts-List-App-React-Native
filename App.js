import React from 'react';
import type {Node} from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';

import AppNavigation from './src/navigation/AppNavigation';

const queryClient = new QueryClient();

const App: () => Node = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
