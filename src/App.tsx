import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './Store';

import LoginComponent from './components/login-component/LoginContainer';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Router>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h5" color="inherit">
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            {/*Routes to different components goes here.
              Be sure to import from container file */}
              <Route path='/login' render={() => <LoginComponent />} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
