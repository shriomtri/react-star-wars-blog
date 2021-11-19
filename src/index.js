import React from 'react';
import { render } from 'react-dom';

//import styles
import './styles/styles.scss'

// app component
import App from './app';

//render
render(
  <>
    <App />
  </>, 
  document.getElementById('root')
  );
