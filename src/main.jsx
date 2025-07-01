import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';
import App from './App';
import { globalStyles } from './styles/globalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);