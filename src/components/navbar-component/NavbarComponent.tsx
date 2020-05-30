import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';
import { makeStyles, List, ListItem, Typography, ListItemText, Select, Menu, MenuItem, Button, ClickAwayListener, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
interface INavbarProps {
    authUser: User;
    errorMessage: string;
    logoutAction: () => void;
}

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
                        <Link to="/home">MemeStore</Link>
                    </Typography>
                    {
                        !  props.authUser ?
                        <>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6">
                                    <Link to="/login">Login</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="h6">
                                    <Link to="/register">Register</Link>
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
                                        <MenuItem onClick={handleClose}><Link to="/addItem">Add New Inventory Item</Link></MenuItem>
                                        <MenuItem onClick={handleClose}><Link to="/addItem">Update New Inventory Item</Link></MenuItem>
                                        <MenuItem onClick={handleClose}><Link to="/addItem">Remove New Inventory Item</Link></MenuItem>
                            </Menu>      
                            </ListItemText >
                            <ListItem>
                                <Button>
                                    <Link to="/cart" className={classes.logout} onClick={userLogout}>
                                         <ShoppingCartIcon /> 
                                    </Link>
                                 </Button>
                            </ListItem>
                            <ListItemText inset>
                                <Typography color="secondary" variant="h6">
                                    <Link to="/login" className={classes.logout} onClick={userLogout}>Logout</Link>
                                </Typography>
                            </ListItemText>
                            
                        </>
                        :
                        <>

                        </>
                    }
                </ListItem>
            </List>
        </>
    )
}

export default NavbarComponent;