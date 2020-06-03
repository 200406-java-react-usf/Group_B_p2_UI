import React, { useEffect, useState } from 'react';
import {Inventory} from '../../models/Inventory';
import { Container, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, makeStyles, Grid, Theme, createStyles, Paper, List, Slider, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IBrowseProps {
}

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            width:300,
            height: 500
        },
        media: {
            height: 400
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
    const[priceValue, setPriceValue] = useState<number[]>([0, 100]);
    const[filterVals, setFilterVals] = useState<string[]>([]);
    
    let itemCards: any[] = [];
    let category: string[] = [];
    let filters: Array<any> = [];

    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        setPriceValue(newValue as number[]);
      };

    function valuetext(value: number) {
        return `$${value}`;
    }

    //const filterChange = (event: any, )

    useEffect(() => {
        
    
        let fetchData = async () => {
    
        //const response = await getInventory();
    
        let item1 = new Inventory(1, "item 1", "first item", 1.00, "other", "https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/gaming-meme/Funny-Gaming-Memes-29.jpg");
        let item2 = new Inventory(2, "item 2", "second item", 2.00, "other", "image");
        let item3 = new Inventory(3, "item 3", "third item", 3.00, "other", "image");
        let item4 = new Inventory(4, "if 1 has a long name what does it look like", "fourth item", 4.00, "other", "image");
        let item5 = new Inventory(5, "item 5", "fifth item", 5.00, "other", "image");
    
        
        const response = [item1, item2, item3, item4, item5]
    
        
        response.forEach(element => {if(!category.includes(element.category)) category.push(element.category)})

        console.log(category)


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
                                <Link to={`/item-details-${item.item_id}`} color="primary">
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.item_name}
                                    </Typography>
                                </Link>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {"$" + item.cost.toFixed(2)}
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

                        <List>
                            <Typography id="range-slider" gutterBottom>
                            Filter by Category
                            </Typography>
                            {/* {{for(item of category) {
                                <Checkbox
                                    onChange={filterChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            }}} */}
                            <Typography id="range-slider" gutterBottom>
                            Price range
                            </Typography>
                            <Slider
                            value={priceValue}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            />
                        </List>
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