import React, { useEffect, useState } from 'react';
import {Inventory} from '../../models/Inventory';
import { Container, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, makeStyles, Grid, Theme, createStyles, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getAllInventory } from '../../remote/inventory-service';

interface IBrowseProps {
}

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
        maxWidth: 345,
        },
        media: {
        height: 140,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    })
);


let BrowseItemsComponent = (props: IBrowseProps) => {

    const[items, setItems] = useState([] as Inventory[]);
    
    let itemCards: any[] = [];

    const classes = useStyles();
    
    useEffect(() => {
        
    
        let fetchData = async () => {
    
        const response = await getAllInventory();

    
            for (let item of response){

                itemCards.push(
                    <Grid item spacing={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={item.item_image}
                                title={item.item_name}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.item_name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.cost}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={`/item-details-${item.item_id}`} color="primary">
                                    Details
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                )
            }
            setItems(itemCards);
        };

        fetchData();

    }, []);
    
    //@ts-ignore

    return (
        <>
        <div className='div'>
            <Grid container spacing={2} justify="space-around">
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        Sort/Filter
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        items
                        <Grid container spacing={2}>
                            {items}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default BrowseItemsComponent;