import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { REACT_DEV_HOST } from '../utils/constants';
export default function productCard({product}) {

    return (
        <div>
            <Card className="my-4 p-3 rounded">
                <Link to={`/products/${product.p_productId}`}>
                    <Card.Img src={product.p_productImg === null ?  REACT_DEV_HOST + "defaultImg.jpg" : REACT_DEV_HOST + product.p_productImg} variant='top'/>
                </Link>
                <Card.Body>
                    <a href={`/products/${product.p_productId}`}>
                        <Card.Title as="div"><h5>{product.p_productName}</h5></Card.Title>
                    </a>
                    <Card.Text as="p">{product.p_description.length > 100 ? product.p_description.slice(0,100) + "..." : product.p_description}</Card.Text>
                    <Card.Text as="h3">
                        <div className="my-3">
                            {product.p_price}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
