import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage.js'
import Protected from './components/Protected.js'
import LoginPage from './components/LoginPage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/homepage" component={Homepage}/>
          <Protected path="/protected" component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
