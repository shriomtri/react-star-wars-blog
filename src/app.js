import React from "react";
import { Outlet } from "react-router-dom";

import Loader from "./components/loader/loader";
import Navigation from "./components/nav/navbar";
import Home from './pages/home'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
    };
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
    this.setState({
      error: err
    })
  }


  render() {
    return (
      <div className="app">
        <Navigation />
        <Home/>
      </div>
    );
  }
}

export default App;
