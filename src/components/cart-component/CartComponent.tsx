import React, {useState, useEffect} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Breadcrumbs, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, List, ListItem, ListItemText, Divider, RadioGroup, FormControlLabel, Radio, TextField, GridListTile, Modal, createStyles, Theme } from '@material-ui/core';
import { Inventory } from '../../models/Inventory';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';
import { NewUser } from '../../models/NewUser';



export interface ICartProps{
    authUser: User
    cart: Array<Inventory>
    cartAction: ((items: Inventory[], user: User) => void)
    detailsAction: ((cart: Inventory[]) => void)
    registerAction: ((user: NewUser) => void)
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

let CartComponent = (props: ICartProps) =>{

    console.log("cart", props.cart)

    const classes = useStyles();

    const[items, setItems] = useState<any[]>([]);
    const [open, setOpen] = React.useState(false);
    let total: number = 0;
    let noRepeatCart: Inventory[] = [];

    props.cart.forEach(item => {
        !noRepeatCart.find(noRepeatItem => noRepeatItem.item_id == item.item_id)?
        noRepeatCart.push(item):
        noRepeatCart = noRepeatCart;
    })
    
    const itemQuantity = (itemId: number) => {

        let quant: number = 0;
    
        props.cart.forEach(item => {
            item.item_id == itemId?
            quant++:
            quant = quant;
        })
    
        return quant;
    }

    for(let item of noRepeatCart){
        total = total + (item.cost * itemQuantity(item.item_id));
    }
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={classes.paper}>
          <h2 id="simple-modal-title">Purchase was a success!</h2>
          <p id="simple-modal-description">
            Thank you
          </p>
          <Button onClick={handleClose} color="secondary">No Problem!</Button>
        </div>
      );

    const purchaseItems = async () => {
        
        props.cartAction(props.cart, props.authUser);
        handleOpen();
    }


    useEffect(() => {

        let itemCards: any[] = [];

        for(let item of noRepeatCart){
            itemCards.push(
                <>
                <Paper square={true}>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src={item.item_image} style={{height:125, margin:"5%"}} />
                        </Grid>
                        <Grid item xs ={2}>
                            <ListItemText style={{marginTop:"25%", marginBottom:"25%"}}>{`${item.item_name}`}</ListItemText>
                        </Grid>
                        <Grid item xs ={2}>
                            <ListItemText style={{marginTop:"25%", marginBottom:"25%"}}>{`$${item.cost}`}</ListItemText>
                        </Grid>
                        <Grid item xs ={2}>
                            <ListItemText style={{marginTop:"25%", marginBottom:"25%"}}>
                            <TextField
                            defaultValue={itemQuantity(item.item_id)}
                            onChange={(event: any) => {
                                let tempCart = props.cart;
                                tempCart = tempCart.filter(tempItem => tempItem.item_id != item.item_id)

                                for(let i=0; i < event.target.value; i++){
                                    tempCart.push(item)
                                }
                                props.detailsAction(tempCart)
                            }}
                            id="outlined-number"
                            type="number"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                                margin: "dense"
                            }}
                            variant="outlined"   
                        />
                            </ListItemText>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={() => {
                                let tempCart = props.cart;
                                tempCart = tempCart.filter(tempItem => tempItem.item_id != item.item_id)
                                props.detailsAction(tempCart)
                                }}
                                style={{marginTop:"25%", marginBottom:"25%"}} color="secondary">Remove item</Button>
                        </Grid>
                    </Grid>
                </Paper>
                </>
            )
        }
        setItems(itemCards);
    }, [props.cart])

	return (
        <>
        <div style={{margin:"2%"}}>
        <Paper square={true} style={{borderColor:"white", borderWidth:4}}>
            <Grid container>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs ={2}>
                    <ListItemText>{`Item`}</ListItemText>
                </Grid>
                <Grid item xs ={2}>
                    <ListItemText>{`Price`}</ListItemText>
                </Grid>
                <Grid item xs ={2}>
                    <ListItemText>{`Quantity`}</ListItemText>
                </Grid>
            </Grid>
        </Paper>
        {items.length != 0?
        items:
        <>
        <p>There are no items in your cart</p>
        <p><span>To browse catalog click </span><span><Link to="/browse">here</Link></span></p>
        </>
        }
        <Paper square={true}>
            <Grid container>
                <Grid item xs ={10}>
                </Grid>
                <Grid item xs ={2}>
                    <ListItemText style={{marginTop:"5%", marginBottom:"5%"}}>{`Total: $${total.toFixed(2)}`}</ListItemText>
                </Grid>
            </Grid>
        </Paper>
            <Grid container>
                <Grid item xs ={10}>
                </Grid>
                <Grid item xs ={2}>
                    <Button style={{marginTop:"5%", marginBottom:"5%"}} onClick={purchaseItems} color="secondary" variant="contained">Purchase items</Button>
                </Grid>
            </Grid>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        {body}
        </Modal>
        </>
    );
}

export default CartComponent;