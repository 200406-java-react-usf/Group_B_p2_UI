import React, {useState} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Breadcrumbs, Link, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, List, ListItem, ListItemText, Divider, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import { Inventory } from '../../models/Inventory';


export interface IItemDetailsProps{
	thisItem: Inventory
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

let ItemDetailsComponent = (props: IItemDetailsProps) =>{
	const classes = useStyles();

	let item = new Inventory(1, "item 1", "a meme about gamers and a wholesome relationship with their mothers that they never thought was possible", 1.00, "other", "https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/gaming-meme/Funny-Gaming-Memes-29.jpg")
	
	return (
		<div style={{padding:"2%"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/browse">
                    All Memes
                </Link>
                <Typography color="textPrimary">{item.item_name}</Typography>
            </Breadcrumbs>
            <Paper style={{padding:"2%", marginTop:"1%"}}>
            <Grid container>
                <Grid item xs={5}>
                    <img src={item.item_image} style={{maxHeight:500}}/>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItem>
                            <ListItemText primary={item.item_name}/>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={"Price: $" + item.cost.toFixed(2)}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={"category: " + item.category}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={item.details}/>
                        </ListItem>
                        <ListItem>
                        <div style={{paddingRight:100}}>
                        <TextField
                            defaultValue={1}
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"   
                        />
                        </div>
                        </ListItem>
                        <ListItem>
                        <Button variant="contained" color="secondary">
                        Add to Cart
                        </Button>  
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </Paper>

        </div>
    );
}

export default ItemDetailsComponent;