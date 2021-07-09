import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from "react-redux";
import { Unificator } from './Unificator';

ReactDOM.render(
  <Provider store={store}>
    <Unificator />
  </Provider>,


  document.getElementById('root')
);


