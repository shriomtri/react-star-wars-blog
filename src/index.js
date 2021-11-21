import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

//import styles
import './styles/styles.scss'

// app component
import App from './app';
import SinglePost from './pages/single-post'
import {history} from './history/index'

import configureStore from './stores/configureStore';
import initialReduxState from './constants/initialState';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

const store = configureStore(initialReduxState);

render(
  <Provider store={store}>
    <HashRouter history={history}>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/post/:id" element={<SinglePost/>}/>
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)