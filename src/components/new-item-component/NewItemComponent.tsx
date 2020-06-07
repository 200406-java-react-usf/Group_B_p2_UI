import React, { useState } from 'react';
import { makeStyles, Typography, FormControl, InputLabel, Input, Button, TextField, InputAdornment, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Paper } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { NewInventory } from '../../models/NewInventory';
import { User } from '../../models/User';



export interface INewItemProps {
    authUser: User;
    newItem: NewInventory;
    newItemAction: (item: NewInventory) => void;   
} 

const useStyles = makeStyles({

});

let AddItemComponent = (props: INewItemProps) => {
    const classes = useStyles();
    
    const [item_name, setItemName] = useState('');
    const [details, setDetails] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [item_image, setItemImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    let updateField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'item_name':
                setItemName(e.target.value);
                break;
            case 'details':
                setDetails(e.target.value);
                break;
            case 'cost':
                setCost(e.target.value);
                break;
            case 'category':
                setCategory(e.target.value);
                break;
            case 'item_image':
                setItemImage(e.target.value);
                break;
            default:
                console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`); 
        }
    }

    

    let addNewItem = async () => {
        
        let item = new NewInventory(item_name, details, +cost, category, item_image);

        props.newItemAction(item);
    }

    return (
        //!props.authUser?
        //<Redirect to='/login'/>:
        <>
        <Paper style={{display: "flex",
                justifyContent: "center",
                margin: 20,
                marginTop: 40,
                padding: 20}}>
            <form >
                <Typography align="left" variant="h4">New Inventory Item</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="item_name">Name</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={item_name} 
                        id="item_name" type="text" 
                        placeholder="Item Name"/>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="details">Details</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={details} 
                        id="details" type="text" 
                        placeholder="Details" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="cost">Cost</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={cost} 
                        id="cost" type="text" 
                        placeholder="Cost"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={category} 
                        id="category" type="text" 
                        placeholder="Category" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="item_image">Item Image</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={item_image} 
                        id="item_image" type="text" 
                        placeholder="Item image URL"/>
                </FormControl>

                <br/><br/>
                <Button component={Link} onClick={addNewItem} to='/admin-dashboard' variant="contained" color="secondary">Add Item</Button>
                <br/><br/>
                {
                    errorMessage 
                        ? 
                    <span style={{color:"red"}}>{errorMessage}</span>
                        :
                    <></>
                }
            </form>
        </Paper>
        </>
    );

}

export default AddItemComponent;