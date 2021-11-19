import React from "react";
import { render } from 'react-dom'
import './styles/styles.scss'

const App = () => {
  return(
    <div>
      <h1> Hello World! </h1>
      <h3>From inside src/app.js, which is bundle to public/bundle.js</h3>
    </div>
  )
}

export default App;
