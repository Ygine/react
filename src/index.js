import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './components/App';
import {ContextProvider} from './components/HOKS/context';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        <Route component={App}/>
      </BrowserRouter>
    </ContextProvider>
  </Provider>,
  document.getElementById('root'),
);
