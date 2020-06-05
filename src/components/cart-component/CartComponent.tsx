import React, {useState, useEffect} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Breadcrumbs, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, List, ListItem, ListItemText, Divider, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import { Inventory } from '../../models/Inventory';
import { detailsAction } from '../../actions/item-details-actions';
import { Link } from 'react-router-dom';


export interface ICartProps{
    cart: Array<Inventory>
    cartAction: ((cart: Inventory[]) => void)
}

const useStyles = makeStyles({
	registerContainer:{
		display: "flex", 
		justifyContent: "center",
		margin: 20, 
		marginTop: 40, 
		padding: 20
	},
	registerForm: {
		width: "50%"
    },
    table: {
        minWidth: 650,
    }
});

let CartComponent = (props: ICartProps) =>{
    const classes = useStyles();

    useEffect(() => {
        <Paper>
            
        </Paper>
    })
	return (
        <>
        <List>
            <ListItem></ListItem>
        </List>
        </>
    );
}

export default CartComponent;