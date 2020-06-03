import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { Alert } from '@material-ui/lab';
import { makeStyles, Select, MenuItem, Grid, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Invoice } from '../../models/Invoice';
import { getAllInvoices } from '../../remote/invoices-service';


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
    const [invoices, setTableData] = useState([new Invoice(0,'',0 ,new Date)]);
    const [errorMessage, setErrorMessage] = useState('');

    let getTableData = async () => {
        let result = (await getAllInvoices()).filter(function(invoice: Invoice) {
            return invoice
        });
        console.log(result);
        setTableData(result);
    }
    
  

    useEffect(() => {
        getTableData();
    }, []);

  return (
   // !(props.authUser.role_name =='admin')  ? <Redirect to='/home' />:   
    <>
        <div className={classes.reimbTable}>
            < MaterialTable
                
                columns = {[
                    { title: 'Id', field: 'invoice_id', editable: 'never'},
                    { title: 'Username', field: 'username', editable: 'never',  cellStyle: {textAlign: 'left'} },
                    { title: 'Total Cost', field: 'total_cost', editable: 'never', type: 'currency'},
                    { title: 'Date Ordered', field: 'date_ordered' , editable: 'never', type: 'date'},
                                              
                ]}
            data={[
                { invoice_id: 1, username: 'Test User', total_cost: 2.45, date_ordered: Date.now()}
            ]}
            //data = {items}
            title = "Inventory Items"
            detailPanel={rowData => {
                return (
                  <div>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography>{rowData.invoice_id}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={rowData.username} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{rowData.total_cost}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{rowData.date_ordered}</Typography>
                            </Grid>
                        </Grid>
                  </div>
                )
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