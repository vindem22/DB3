import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { addProductToCard } from '../requests/cartAPI';
import { REACT_DEV_HOST } from '../utils/constants';
export default function productCard({product}) {
    
    return (
        <>
            <style type="text/css">
                {`
                    .card:hover {
                        box-shadow: 0 0 5px rgba(0,0,0,0.2);
                        transform: scale(1.1);
                        transition: 1s;
                    }
                `}
            </style>
            <Card className="card mb-4 p-3 rounded">
                <Link to={`/products/${product.p_productId}`}>
                    <Card.Img src={product.p_productImg === null ?  REACT_DEV_HOST + "defaultImg.jpg" : REACT_DEV_HOST + product.p_productImg} variant='top'/>
                </Link>

                <Card.Body>
                    <a href={`/products/${product.p_productId}`}>
                        <Card.Title as="h6">{product.p_productName}</Card.Title>
                    </a>
                    <Card.Text as="p">{product.p_description.length > 100 ? product.p_description.slice(0,100) + "..." : product.p_description}</Card.Text>
                    <Card.Text as="h3">
                        <div className="my-3">
                            {product.p_price} &#8376;
                        </div>
                    </Card.Text>
                    <Button block onClick={() => addProductToCard(product.p_productId)}>Add to cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}
