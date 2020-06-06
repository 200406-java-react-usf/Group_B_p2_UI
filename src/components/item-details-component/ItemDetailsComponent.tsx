import React, {useState} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Breadcrumbs, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, List, ListItem, ListItemText, Divider, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import { Inventory } from '../../models/Inventory';
import { detailsAction } from '../../actions/item-details-actions';
import { Link } from 'react-router-dom';


export interface IItemDetailsProps{
    thisItem: Inventory
    cart: Array<Inventory>
    detailsAction: ((cart: Inventory[]) => void)
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
    const[quantity, setQuantity]= useState<number>(1);
    const[error, setError]= useState<boolean>(false);
    const[errorMessage, setErrorMessage]= useState<string>("");

	//let item = new Inventory(1, "item 1", "a meme about gamers and a wholesome relationship with their mothers that they never thought was possible", 1.00, "other", "https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/gaming-meme/Funny-Gaming-Memes-29.jpg")
    const changeQuantity = (event: any) => {
        if(event.target.value > 0){
            setError(false);
            setErrorMessage("")
            setQuantity(event.target.value);
        } else if(event.target.value == 0) {
            setError(true);
            setErrorMessage("no items will be added to cart")
        } else {
            setError(true);
            setErrorMessage("value cannot be less than 0")
        }
    }
    
    const addToCart = () => {
        if(quantity > 0){

        let array: Array<Inventory> = [...props.cart]


        for(let i = 0; i < quantity; i++) {
            array.push(props.thisItem);
        }

        props.detailsAction(array);
        }
    }

	return (
        <>
        {!props.thisItem?
        <Redirect to="/browse"/>
        : <></>}
		<div style={{padding:"2%"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/browse">
                    All Memes
                </Link>
                <Typography color="textPrimary">{props.thisItem.item_name}</Typography>
            </Breadcrumbs>
            <Paper style={{padding:"2%", marginTop:"1%"}}>
            <Grid container>
                <Grid item xs={5}>
                    <img src={props.thisItem.item_image} style={{maxHeight:500}}/>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItem>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            {props.thisItem.item_name}
                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography>Price: </Typography>
                            <span> </span>
                            <Typography variant="h6" color="secondary">
                                {" $" + props.thisItem.cost.toFixed(2)}
                            </Typography>
                            
                        </ListItem>
                        <ListItem>
                            <Typography >Category:</Typography>
                            <Button disabled={true}>{props.thisItem.category}</Button>
                        </ListItem>
                        <ListItem>
                            <Typography >Description: </Typography>
                            <span> </span>
                            <Typography color="primary">{props.thisItem.details}</Typography>
                        </ListItem>
                        <ListItem>
                        <div style={{paddingRight:100}}>
                        <TextField
                            onChange={changeQuantity}
                            defaultValue={1}
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            size="small"
                            error={error}
                            helperText={errorMessage}
                            InputLabelProps={{
                                shrink: true,
                                margin: "dense"
                            }}
                            variant="outlined"   
                        />
                        </div>
                        {}

                        </ListItem>
                        <ListItem>
                        <Button variant="contained" color="secondary" onClick={addToCart}>
                        Add to Cart
                        </Button>  
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </Paper>

        </div>
        </>
    );
}

export default ItemDetailsComponent;