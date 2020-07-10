import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";

import Wrapper from "./Pages/index"

function Footer() {
  return (<footer style={{
    height: "50px",
    "margin-top": "-50px"
  }} className="container" >
    <p className="float-right"><a href="#">Back to top</a></p>
    <p>© 2017-2020 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer >
  )
}

class App extends Component {
  render() {
    console.log(this.props.location)
    return (<>
      <Router>
        <Wrapper />
      </Router>
      {/* <Footer /> */}
    </>
    );
  }
}

export default App
