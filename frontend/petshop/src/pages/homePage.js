import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2)
    }
}));

export default function HomePage() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9890/api/product/")
            .then(response => {
                setProducts(response.data)
            })

    }, [setProducts])
    console.log(products[0])

    return (
        <div>
            <Row>
                {products.map(product => (
                    <Col key={product.p_productId} sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
