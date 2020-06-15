import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import displayBladeReducer from './store/reducers/displayBlade';

const store = createStore(displayBladeReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
