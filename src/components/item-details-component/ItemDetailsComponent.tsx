import React, {useState} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Breadcrumbs, Link } from '@material-ui/core';
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
	}
});

let ItemDetailsComponent = (props: IItemDetailsProps) =>{
	const classes = useStyles();

	let item = new Inventory(1, "item 1", "first item", 1.00, "other", "https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/gaming-meme/Funny-Gaming-Memes-29.jpg")
	
	return (
		<div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/browse">
                    All Memes
                </Link>
                <Typography color="textPrimary">{item.item_name}</Typography>
            </Breadcrumbs>
        </div>
    );
}

export default ItemDetailsComponent;