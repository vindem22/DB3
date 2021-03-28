import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function ProductCard(props) {
    const product = props.product;
    const imageLink = !product.p_productImg == null ? product.p_productImg : "https://images.saymedia-content.com/.image/t_share/MTc0MDcyMTYxNjQyNzUxNTU0/cat-food-and-health-issues-guide.jpg";
    const useStyles = makeStyles({
        root: {
            flexBasis : "10rem",
            flexGrow : 1,
            maxWidth : 300,
            margin : "1rem"
        },
        media : {
            height : 140,
        }
    })
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={imageLink}/>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {product.p_productName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.p_description}
                        </Typography>
                        <Typography variant="h6" color="secondary">
                            {product.p_price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Buy</Button>
                    <Button size="small" color="primary">Details</Button>
                </CardActions>
            </Card>
        </>
    )
}
