import React, { useEffect, useState, ChangeEvent } from 'react';
import {Inventory} from '../../models/Inventory';
import { Container, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, makeStyles, Grid, Theme, createStyles, Paper, List, Slider, Checkbox, FormControlLabel, ListItem, ListItemText, Divider, RadioGroup, Radio } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import { listenerCount } from 'cluster';
import ItemDetailsComponent from '../item-details-component/ItemDetailsContainer'
import { browseAction } from '../../actions/browse-items-actions';

interface IBrowseProps {
    browseAction: ((item: Inventory) => void)
}

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            width:280,
            height: 500
        },
        media: {
            height: 350
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
    const[currentFilters, setCurrentFilters] = useState<string[]>([]);
    const[currentSort, setCurrentSort] = useState<string>("new");
    
    let itemCards: any[] = [];
    let category: string[] = [];
    let filters: Array<any> = [];
    

    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        setPriceValue(newValue as number[]);
    };

    const handleSortChange = (event: any) => {
        setCurrentSort((event.target as HTMLInputElement).value);
    }

    function valuetext(value: number) {
        return `$${value}`;
    }

    const applyFilters = (event: any) => {
        if(event.target.checked && !currentFilters.includes(event.target.value)){
            let filter = [...currentFilters];
            filter.push(event.target.value)
            setCurrentFilters(filter);
        } else if (!event.target.checked && currentFilters.includes(event.target.value)){
            let filter = [...currentFilters];
            filter = filter.filter(val => val != event.target.value);
            setCurrentFilters(filter);
        }
        console.log(currentFilters) 
    }



    useEffect(() => { 
    
        let fetchData = async () => {
    
        //const response = await getInventory();
    
        let item1 = new Inventory(1, "item 1", "first item", 1.00, "other", "https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/gaming-meme/Funny-Gaming-Memes-29.jpg");
        let item2 = new Inventory(2, "item 2", "second item", 56.00, "a", "image");
        let item3 = new Inventory(3, "item 3", "third item", 3.00, "b", "image");
        let item4 = new Inventory(4, "if 1 has a", "fourth item", 4.00, "c", "image");
        let item5 = new Inventory(5, "item 5", "fifth item", 5.00, "d", "image");
    
        
        let response = [item1, item2, item3, item4, item5]
        
        if(currentSort === "new"){
            response = response.sort((a, b) => (a.item_id > b.item_id) ? 1 : -1)
        } else if(currentSort === "old"){
            response = response.sort((a, b) => (a.item_id < b.item_id) ? 1 : -1)
        } else if(currentSort === "low"){
            response = response.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
        } else if(currentSort === "high"){
            response = response.sort((a, b) => (a.cost < b.cost) ? 1 : -1)
        }
        
        response.forEach(element => {if(!category.includes(element.category)) category.push(element.category)})
        
            for(let item of category){
                filters.push(
                    <ListItem>
                    <FormControlLabel
                        value={item}
                        onChange={applyFilters}
                        control={<Checkbox color="secondary" />}
                        label={item}
                        labelPlacement="end"
                    />
                    </ListItem>
                )
            }
            setFilterVals(filters);
            console.log(priceValue[0], priceValue[1])

            for (let item of response){
                if((currentFilters.length === 0 || currentFilters.includes(item.category)) && item.cost > priceValue[0] && item.cost < priceValue[1]){
                    itemCards.push(
                        <>
                        <Grid item spacing={2}>
                            <Card className={classes.root} raised={true}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={item.item_image}
                                    title={item.item_name}
                                    />
                                    <CardContent>
                                    <Link onClick={(event) => {
                                        props.browseAction(item)
                                    }}
                                        to={'/item-details'} color="primary">
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.item_name}
                                        </Typography>
                                    </Link>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {"$" + item.cost.toFixed(2)}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        </>
                        
                    )
                }
            }
            setItems(itemCards);
        };

        fetchData();

    }, [currentFilters, priceValue, currentSort]);


    

    return (
        
        <>
        <div style={{marginTop:5, marginLeft:10}}>
            <Grid container spacing={2} justify="space-around">
                <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Sort By"/>
                            </ListItem>
                            <Divider />
                            <ListItem>
                            <RadioGroup aria-label="gender" name="gender1" value={currentSort} onChange={handleSortChange}>
                                <FormControlLabel value="new" control={<Radio />} label="New to Old" />
                                <FormControlLabel value="old" control={<Radio />} label="Old to New" />
                                <FormControlLabel value="low" control={<Radio />} label="Price: Low to High" />
                                <FormControlLabel value="high" control={<Radio />} label="Price: High to Low" />
                            </RadioGroup>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Filter By"/>
                            </ListItem>
                            <Divider />
                            <ListItem>
                            <ListItemText primary="Category"/>
                            </ListItem>
                            {filterVals}
                            <Divider />
                            <ListItem>
                            <ListItemText primary="Price"/>
                            </ListItem>
                            <br></br>
                            <div style={{paddingLeft:15, paddingRight:8, paddingTop:10}}>
                            <Slider
                            value={priceValue}
                            onChange={handleChange}
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            valueLabelDisplay="on"
                            />
                            </div>
                        </List>
                </Grid>
                <Grid item xs={9}>
                    <div style={{marginTop:50, marginLeft:10}}>
                    <Grid container spacing={2}>
                        {items}
                    </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default BrowseItemsComponent;