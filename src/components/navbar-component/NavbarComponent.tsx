import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';
import { makeStyles, List, ListItem, Typography, ListItemText, Select, Menu, MenuItem, Button, ClickAwayListener, IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Inventory } from '../../models/Inventory';
import { GoogleLogout } from 'react-google-login';

//Navbar Properties passed from container
interface INavbarProps {
    authUser: User;
    errorMessage: string;
    cart: Inventory[];
    logoutAction: () => void;
}
//Navbar Style Set
const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        color: "white"
    },

    logout: {
        border: 2,
        borderRadius: 5,
        color: 'black',
        height: 48,
        padding: '10px 30px'
    }
});

function NavbarComponent (props: INavbarProps) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    let userLogout = async () => {
        props.logoutAction();
        
        localStorage.clear();
    }
  
    const handleClose = () => {
      setAnchorEl(null);
    };
   
    return(
        <>
            <List component="nav">
                <ListItem component="div">
                    <Typography color="inherit" variant="h5">
                        <Link to="/home" className={classes.link}>
                            <img width="100" src="https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/logo/meme+store.PNG"/>
                        </Link>
                    </Typography>
                    {
                        !props.authUser ?
                        <>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6">
                                    <Link to="/browse" className={classes.link}>Browse Memes</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6" style={{marginLeft:0, marginRight:0}}>
                                    <Link to="/register" className={classes.link}>Register</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>|</ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6">
                                    <Link to="/login" className={classes.link}>Login</Link>
                                </Typography>
                            </ListItemText>
                           
                        </> 
                        :
                        props.authUser.role ==='MANAGER' ?
                        <>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6">
                                    <Link to="/browse" className={classes.link}>Browse Memes</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Admin Control Panel
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                >
                                            <MenuItem disabled>Admin Control Panel</MenuItem>
                                            <MenuItem onClick={handleClose}><Link to="/admin-dashboard">Dashboard</Link></MenuItem>
                                            <MenuItem onClick={handleClose}><Link to="/additem">Add Item</Link></MenuItem>
                                            <MenuItem onClick={handleClose}><Link to="/invoices">View All Invoices</Link></MenuItem>
                                </Menu>      
                            </ListItemText >

                            <ListItemText inset>
                                <Typography color="secondary" variant="h6">
                                    <Link to="/login" className={classes.logout} onClick={userLogout}>Logout</Link>
                                </Typography>
                            </ListItemText>
                        </>
                         :
                        <>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6">
                                    <Link to="/browse" className={classes.link}>Browse Memes</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                
                                <Link to="/cart" className={classes.logout}>
                                    <Badge color ="secondary" badgeContent={props.cart.length}>
                                         <ShoppingCartIcon /> 
                                    </Badge>
                                 </Link>
                            </ListItemText>
                            {props.authUser.last_name === 'Guest' ?
                                <>
                                    <GoogleLogout
                                        clientId="591571828049-u4mun2n3qqfoeit95o7rv5f45pvqsac0.apps.googleusercontent.com"
                                        buttonText="Logout"
                                        onLogoutSuccess={userLogout}
                                    ></GoogleLogout>
                                </>
                                :
                                <>
                                    <ListItemText inset>
                                        <Typography color="secondary" variant="h6">
                                            <Link to="/login" className={classes.logout} onClick={userLogout}>Logout</Link>
                                        </Typography>
                                    </ListItemText> 
                                </>
                            }
                        </>
                    }
                </ListItem>
            </List>
        </>
    )
}

export default NavbarComponent;