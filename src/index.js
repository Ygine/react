import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { AuthenticationProvider } from './contexts/authentication';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { SnackbarProvider } from 'notistack';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AuthenticationProvider>
          <SnackbarProvider maxSnack={3}>
            <Route component={App}/>
          </SnackbarProvider>
        </AuthenticationProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
