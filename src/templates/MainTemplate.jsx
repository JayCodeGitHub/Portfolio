import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

export const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
