import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import axios from 'axios';
import { REACT_DEV_HOST } from '../utils/constants';


export default function ProductPage({ match }) {
    const [product, setProduct] = useState({})
    console.log("Match object is ", match)
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`${REACT_DEV_HOST}api/product/${match.params.id}`)
            
            setProduct(data)
        }
        getProduct()
    }, [])
    console.log("This is product",product)

    return (
        <div>
            <Link className='btn btn-primary my-3' to='/'>Go back</Link>
            <Row>
                <Col md={4}>
                <Card.Img src={product.p_productImg === null ? REACT_DEV_HOST + "defaultImg.jpg" : REACT_DEV_HOST + product.p_productImg} alt={product.p_productName} fluid/>
                </Col>
                <Col md={5}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.p_productName}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            5
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: {product.p_price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Manufacturer: {product.p_manufacturer === null? "Not specified" : product.p_manufacturer}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.p_description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: {product.p_price}
                                    </Col>
                                    <Col>
                                        <h6>{product.p_price}</h6>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={true}>
                                    Add to cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
