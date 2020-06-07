import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './Store';

import HomeComponent from './components/home-component/HomeContainer';
import LoginComponent from './components/login-component/LoginContainer';
import RegisterComponent from './components/register-component/RegisterContainer';
import ItemDetailsComponent from './components/item-details-component/ItemDetailsContainer';
import BrowseItemsComponent from './components/browse-items-component/BrowseItemsContainer';
import CartComponent from './components/cart-component/CartContainer';
import AdminDashComponent from './components/admin-dash-component/AdminDashContainer';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import NewItemComponent from './components/new-item-component/NewItemContainer';
import InvoicesComponent from './components/invoices-component/InvoicesContainer';



const theme = createMuiTheme({

  palette: {
      
      primary: {
          main: '#4e5157'},
      secondary: {
          main: '#c75504'}
     }
   });
   
function App() {
  return (
    <MuiThemeProvider theme={theme}>
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
            <Route path='/additem' render={() => <NewItemComponent />} />
            <Route path='/admin-dashboard' render={() => <AdminDashComponent />} /> 
            <Route path='/register' render={() => <RegisterComponent />} />
            <Route path={'/item-details'} render={() => <ItemDetailsComponent />} />
            <Route path={'/invoices'} render={() => <InvoicesComponent />} />
            <Route path='/home' render={() => <HomeComponent />} /> 
            <Route path='/cart' render={() => <CartComponent />} />

          </Switch>
        </Router>
      </Provider>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
