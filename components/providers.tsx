'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider as ReduxProvider } from 'react-redux';
import { apolloClient } from '@/lib/apollo';
import { store } from '@/lib/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </ApolloProvider>
  );
}
