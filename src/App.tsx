import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './Store';

// import HomeComponent from './components/home-component/HomeContainer';

import LoginComponent from './components/login-component/LoginContainer';
import RegisterComponent from './components/register-component/RegisterContainer';
import ItemDetailsComponent from './components/item-details-component/ItemDetailsContainer';
import BrowseItemsComponent from './components/browse-items-component/BrowseItemsContainer';
// import CartComponent from './components/cart-component/CartContainer';
import AdminDashComponent from './components/admin-dash-component/AdminDashContainer';

import NavbarComponent from './components/navbar-component/NavbarContainer';
import NewItemComponent from './components/new-item-component/NewItemContainer';
import NewItemContainer from './components/new-item-component/NewItemContainer';


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

            <Route path='/login' render={() => <LoginComponent />} />
            <Route path='/browse' render={() => <BrowseItemsComponent />} />
           {/* <Route path='/cart' render={() => <CartComponent />} />*/}
            <Route path='/additem' render={() => <NewItemComponent />} />
            <Route path='/admin-dashboard' render={() => <AdminDashComponent />} /> 
            <Route path='/register' render={() => <RegisterComponent />} />
            <Route path={'/item-details'} render={() => <ItemDetailsComponent />} />

            {/*
            <Route path='/home' render={() => <HomeComponent />} /> 
            <Route path='/cart' render={() => <CartComponent />} />*/}
            <Route path='/admin-dashboard' render={() => <AdminDashComponent />} />
            <Route path={'/addItem'} render={() => <NewItemComponent />} /> 

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
