import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './Store';
import NavbarComponent from './components/navbar-component/NavbarContainer';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Router>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                <NavbarComponent />
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
           
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
