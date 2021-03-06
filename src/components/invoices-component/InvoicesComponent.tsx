import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { makeStyles, Select, MenuItem, Grid, Typography, Button, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, ListItem, ListItemText } from '@material-ui/core';
import { Invoice } from '../../models/Invoice';
import { getAllInvoices } from '../../remote/invoices-service';
import { Redirect } from 'react-router';



export interface IInvoicesState {
    authUser: User;
}

const useStyles = makeStyles({

    detailsTable: {
        borderBottom: "none",
        textAlign: "left",
        textDecoration: "underline"

    }
});

const InvoicesComponent = (props: IInvoicesState) => {

    const classes = useStyles();
    const [invoices, setTableData] = useState([new Invoice(0,'',0 ,new Date, [])]);


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
   ((props.authUser.role !='MANAGER') || !props.authUser)? <Redirect to='/home' />:   
    <>
        <div>
            < MaterialTable
                
                columns = {[
                    { title: 'Id', field: 'invoice_id', editable: 'never'},
                    // { title: 'Username', field: 'username', editable: 'never',  cellStyle: {textAlign: 'left'} },
                    { title: 'Total', field: 'total_cost', editable: 'never', type: 'currency', cellStyle: {textAlign: 'left'}},
                    { title: 'Date Ordered', field: 'date_ordered' , editable: 'never', type: 'date'},
                                              
                ]}
            // data={[
            //     { invoice_id: 1, username: 'Test User', total_cost: 2.45, date_ordered: 'October 8, 2019'}
            // ]}
            data = {invoices}
            title = "Inventory Items"
            detailPanel={rowData => {
                return (
                  <div>
                      <TableContainer >
                          <Table>
                               <TableHead>
                                  <TableRow className={classes.detailsTable}>
                                      <TableCell className={classes.detailsTable}>Invoice No.</TableCell>
                                      {/* <TableCell className={classes.detailsTable}>User</TableCell> */}
                                      <TableCell className={classes.detailsTable}>Total Cost</TableCell>
                                      <TableCell className={classes.detailsTable}>Date Ordered</TableCell>
                                      <TableCell className={classes.detailsTable}>Items Purchased</TableCell>
                                  </TableRow>
                              </TableHead>

                             <TableBody>
                                  <TableRow>
                                      <TableCell>{rowData.invoice_id}</TableCell>
                                      {/* <TableCell>{rowData.username}</TableCell> */}
                                      <TableCell>{rowData.total_cost}</TableCell>
                                      <TableCell>{rowData.date_ordered}</TableCell>
                                      {console.log(rowData.items.map(items => items.item_name))}
                                      <TableCell>{rowData.items.map(items => <ListItem>{items.item_name}</ListItem>)}</TableCell>
                                      {/* <TableCell>{rowData.items.forEach(element => {
                                          console.log(element.item_name);
                                          return(
                                             <Typography>{element.item_name}</Typography>
                                          )
                                      })};</TableCell> */}
                                  </TableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
                         {/* <Grid container>
                            <Grid item xs={12}>
                                <Grid xs={6}>
                                    <Typography>Invoice No.</Typography>
                                </Grid>
                                <Grid xs={6}>
                                   <Typography>{rowData.invoice_id}</Typography> 
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>User</Typography>
                                <Typography>{rowData.username}</Typography> 
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Total</Typography>
                                <Typography>{rowData.total_cost}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Date ordered</Typography>
                                <Typography>{rowData.date_ordered}</Typography>
                            </Grid>
                        </Grid>  */}
                  </div>
                )
              }}
            
            
            
            />


    
    </div>

</>
);
}

export default InvoicesComponent;