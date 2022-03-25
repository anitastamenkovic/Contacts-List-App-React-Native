import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {QueryClientProvider} from 'react-query';

import {queryClient} from './src/services/api';
import AppNavigation from './src/navigation/AppNavigation';

const App: () => Node = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
