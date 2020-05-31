import React, { useEffect } from 'react';
import {Inventory} from '../../models/Inventory';
import { Container, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, makeStyles, Grid, Theme, createStyles, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IBrowseProps {
    items: Array<Inventory>;
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

const classes = useStyles();

let itemCards: any[] = [];

useEffect(() => {
    let fetchData = async () => {

    const response = await getInventory();

    for (let item of response){

        itemCards.push(

            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={item.item_image}
                title={item.item_name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.item-name}
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
            
        )
    }
};

    fetchData()
}, []);

let BrowseItemsComponent = (props: IBrowseProps) => {
    
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    Sort/Filter
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Container className="container">
                    {itemCards}
                </Container>
            </Grid>
        </Grid>
        </>
    )
}