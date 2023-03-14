import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../assets/styles/defaults';
import GlobalStyles from '../../assets/styles/global';

import { BrowserRouter } from 'react-router-dom';
import { ReactRoutes } from '../../routes';

import { AuthProvider } from '../../context/authContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AuthProvider>
          <ReactRoutes />
        </AuthProvider>
        <ToastContainer position='bottom-center' />
      </ThemeProvider>
    </BrowserRouter>
  );
}
