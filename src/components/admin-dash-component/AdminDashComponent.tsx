import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { Alert } from '@material-ui/lab';
import { makeStyles, Select, MenuItem, Grid, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Inventory } from '../../models/Inventory'
import { deleteInventory, updateInventory, getAllInventory } from '../../remote/inventory-service';
import { Link } from 'react-router-dom';

export interface IAdminDashProps {
    authUser: User;
    errorMessage: string;
}

const useStyles = makeStyles({
    reimbTable: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
});

const ReimbComponent = (props: IAdminDashProps) => {

    const classes = useStyles();
    const [items, setTableData] = useState([new Inventory(0,'','',0,'','')]);
    const [errorMessage, setErrorMessage] = useState('');

    let getTableData = async () => {
        let result = (await getAllInventory()).filter(function(item: Inventory) {
            return item
        });
        console.log(result);
        setTableData(result);
    }
    
    const updateRow = async (updatedItem: Inventory) => {
        try {
            await updateInventory(updatedItem.item_name, updatedItem.details, updatedItem.cost, updatedItem.category, updatedItem.item_image);
            await getTableData();
        } catch (e) {
            setErrorMessage(e.response.data.reason);
        }
    }
    
    const deleteRow = async (itemToBeDeleted: Inventory) =>{
        try{
            console.log(`Deleting item number: ${itemToBeDeleted.item_id}`)
            await deleteInventory(itemToBeDeleted.item_id);
            await getTableData();
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }
    
    // const addNewInventory = async (newItem: Inventory) =>{
    //     console.log(newItem);
    //     try{
    //         await newInventory(newItem.item_name, newItem.details, newItem.cost, newItem.category, newItem.item_image);
    //         await getTableData();
    //     }catch(e){
    //         setErrorMessage(e.response.data.reason)
    //     }
    // }

    useEffect(() => {
        getTableData();
    }, []);

  return (
   // !(props.authUser.role_name =='admin')  ? <Redirect to='/home' />:   
    <>
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>Admin Dashboard</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button><Link to='additem'>Add New Item</Link></Button>
                </Grid>
                <Grid item xs={6}>
                    <Button><Link to='invoices'>View All Invoices</Link></Button>
                </Grid>
            </Grid>
        </div>
        <div className={classes.reimbTable}>
            < MaterialTable
                
                columns = {[
                    { title: 'Id', field: 'item_id', editable: 'never'},
                    { title: 'Name', field: 'item_name', editable: 'always',  cellStyle: {textAlign: 'left'} },
                    { title: 'Details', field: 'details' , editable: 'always'},
                    { title: 'Cost', field: 'cost', editable: 'always', type: 'currency'},
                    { title: 'Category', field: 'category' , editable: 'never'},
                    { title: 'Image', field: 'item_image' , editable: 'never', render: rowData => <img src={rowData.item_image} style={{width: 50}}/>}                                  
                ]}
            // data={[
            //     { item_id: 1, item_name: 'Test Meme', details: 'Test', cost: 2.45, category: 'meme', item_image: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'}
            // ]}
            data = {items}
            title = "Inventory Items"
            detailPanel={rowData => {
                return (
                  <div>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography>{rowData.item_name}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={rowData.item_image} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{rowData.details}</Typography>
                            </Grid>
                        </Grid>
                  </div>
                )
              }}
            
            editable= {{

                // onRowAdd: newData =>
                // new Promise((resolve,reject) => {
                //     addNewInventory(newData);
                //     resolve();
                // }),
                // onRowUpdate: (newData, oldData) =>
                // new Promise((resolve,reject) =>{
                //     resolve();
                //     updateRow(newData);
                // }),
                onRowDelete: oldData =>
                new Promise((resolve, reject) =>{
                    console.log(oldData.item_id)
                    deleteRow(oldData)
                })
            }}
            
            />


    {
        props.errorMessage 
            ? 
        <Alert severity="error">{props.errorMessage}</Alert>
            :
        <></>
    }
    </div>

</>
);
}

export default ReimbComponent;