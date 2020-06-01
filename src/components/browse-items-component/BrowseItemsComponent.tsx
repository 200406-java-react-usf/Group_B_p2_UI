import React, { useEffect } from 'react';
import {Inventory} from '../../models/Inventory';
import { Container, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, makeStyles, Grid, Theme, createStyles, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

    let itemCards: any[] = [];

    const classes = useStyles();
    
    useEffect(() => {
        
    
        let fetchData = async () => {
    
        //const response = await getInventory();
    
        let item1 = new Inventory(1, "item 1", "first item", 1.00, "other", "image");
        let item2 = new Inventory(2, "item 2", "second item", 2.00, "other", "image");
        let item3 = new Inventory(3, "item 3", "third item", 3.00, "other", "image");
        let item4 = new Inventory(4, "item 4", "fourth item", 4.00, "other", "image");
        let item5 = new Inventory(5, "item 5", "fifth item", 5.00, "other", "image");
    
        const response = [item1, item2, item3, item4, item5]
    
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
                
            )
        }
    };
    
        fetchData()
    }, []);
    
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
                        <Container className="container">
                            {itemCards}
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default BrowseItemsComponent;