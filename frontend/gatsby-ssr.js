/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import { client } from './src/apollo';
import styled, { ThemeProvider } from 'styled-components';
import theme from './src/components/theme';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ApolloProvider>
);
