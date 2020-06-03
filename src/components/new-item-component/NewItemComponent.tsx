import React, { useState } from 'react';
import { makeStyles, Typography, FormControl, InputLabel, Input, Button, TextField, InputAdornment } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { NewInventory } from '../../models/NewInventory';



export interface INewItemProps {
    newItem: NewInventory;
    newItemAction: (item: NewInventory) => void;   
} 

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    loginForm: {
        width: "50%"
    }
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

    

    let submit = async () => {
        
        let item = new NewInventory(item_name, details, +cost, category, item_image);

        props.newItemAction(item);
    }

    return (
        //!props.authUser?
        //<Redirect to='/login'/>:
        <>
        <div style={{ marginTop: 0, marginLeft: '28%', marginRight: '28%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}} className='border-radius'>
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="left" variant="h4">New Inventory Item</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="item_name">Amount</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={item_name} 
                        id="item_name" type="text" 
                        placeholder="item_name"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="item_name">Amount</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={details} 
                        id="details" type="text" 
                        placeholder="details"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                </FormControl>

                

                <br/><br/>
                <Link onClick={submit} to='/edash/my-reimbs' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>Save Reimbursement</Link>
                <br/><br/>
                {
                    errorMessage 
                        ? 
                    <span style={{color:"red"}}>{errorMessage}</span>
                        :
                    <></>
                }
            </form>
        </div>
        </div>
        </>
    );

}

export default AddItemComponent;