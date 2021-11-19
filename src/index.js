import React from 'react';
import { render } from 'react-dom';

// app component
import App from './app';
import { CssBaseline } from '@mui/material';

//render
render(
  <>
    <CssBaseline/>
    <App />
  </>, 
  document.getElementById('root')
  );
