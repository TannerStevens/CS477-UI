import React, { Component } from 'react';
import { 
    HashRouter as Router, 
    Route
} from 'react-router-dom';
import './App.css';

import Main from './Main.js'

class App extends Component {
  render() {
    return (
      <div style={{width:'100%'}}>
        <Router>
            <Route path='/' component={Main}/>
        </Router>
      </div>
    );
  }
}

export default App;