import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

class App extends Component{

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route path='/user' component={UserPage} />
        </Switch>
      </div>
    )
  }
}

export default App