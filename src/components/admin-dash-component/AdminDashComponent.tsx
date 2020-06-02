import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { Alert } from '@material-ui/lab';
import { makeStyles, Select, MenuItem } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Inventory } from '../../models/Inventory'

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
        let result = (await getInventory()).filter(function(item: Inventory) {
            return item
        });
        console.log(result);
        setTableData(result);
    }
    
    const updateRow = async (updatedItem: Inventory) => {
        try {
            await updateInventory(updatedItem);
            await getTableData();
        } catch (e) {
            setErrorMessage(e.response.data.reason);
        }
    }
    
    const deleteRow = async (itemToBeDeleted: Inventory) =>{
        try{
            console.log(`Deleting item number: ${itemToBeDeleted.item_id}`)
            await deleteInventoryById(itemToBeDeleted.item_id);
            await getTableData();
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }
    
    const addNewInventory = async (newItem: Inventory) =>{
        console.log(newItem);
        try{
            await addInventory(newItem);
            getTableData();
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    useEffect(() => {
        getTableData();
    }, []);

  return (
    !(props.authUser.role_name =='admin')  ? <Redirect to='/home' />:   
    <>
        <div className={classes.reimbTable}>
            < MaterialTable
                
                columns = {[
                    { title: 'Id', field: 'item_id', editable: 'never'},
                    { title: 'Name', field: 'item_name', editable: 'always', type: 'currency', cellStyle: {textAlign: 'left'} },
                    { title: 'Details', field: 'details' , editable: 'always', type: 'datetime'},
                    { title: 'Cost', field: 'cost', editable: 'always', type: 'datetime'},
                    { title: 'Category', field: 'category' , editable: 'never'},
                    { title: 'Image', field: 'item_image' , editable: 'never'}                                  
                ]}
            data = {items}
            title = "Inventory Items"
            editable= {{

                onRowAdd: newData =>
                new Promise((resolve,reject) => {
                    addNewInventory(newData);
                    resolve();
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve,reject) =>{
                    resolve();
                    updateRow(newData);
                }),
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