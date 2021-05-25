import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from '../src/components/navigation'

import { Navbar, } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}

export default App;