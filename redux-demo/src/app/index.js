import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/Root.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index.jsx';
const store = createStore(allReducers)


/*ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
    <Root/>    
  </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));*/
  ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
