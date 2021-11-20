import React from 'react';
import { render } from 'react-dom';

//import styles
import './styles/styles.scss'

// app component
import App from './app';
import SinglePost from './pages/single-post'
import {history} from './history/index'

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";




render(
  <HashRouter history={history}>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/post/:id" element={<SinglePost/>}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
)