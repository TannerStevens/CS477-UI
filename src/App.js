import React, { Component } from 'react';
import { 
    HashRouter as Router, 
    Route
} from 'react-router-dom';
import './App.css';

import Main from './Main.js';
import MapScreen from './MapScreen.js';
import SearchScreen from './SearchScreen.js';
import SettingsScreen from './SettingsScreen.js';

class App extends Component {
  render() {
    return (
      <div style={{width:'100%'}}>
        <Router>
            <div>
                <Route exact path='/' component={Main}/>
                <Route path='/map' component={MapScreen}/>
                <Route path='/search' component={SearchScreen}/>
                <Route path='/settings' component={SettingsScreen}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;