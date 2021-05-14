import React, {useState, useEffect} from 'react'
import { Table , Col, Row, Button, Container} from 'react-bootstrap'
import { CartProductRow } from '../components/CartProductRow';
import { getCartProducts } from '../requests/cartAPI';

export default function CartPage() {
    const [cartProducts, setCartProducts] = useState([])
                                                    // {ct_productName : "Product 1", ct_price : 1000},
                                                    // {ct_productName : "Product 1", ct_price : 1000},
                                                    // {ct_productName : "Product 1", ct_price : 1000}])
    
    useEffect(() => {
        getCartProducts().then(data => setCartProducts(data))
    }, [])

    return (
        <>
        <Container>
            <h3>Your cart</h3>
            <Row>
                <Col xl={9} lg={9}>
                    <Table className="text-center vertical-align-center" striped bordered responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Product image</th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map(cartProduct => <CartProductRow cartProduct={cartProduct} index={cartProduct.p_productId} key={cartProduct.p_productId}/>)}
                        </tbody>
                    </Table>
                </Col>
                <Col xl={3} lg={3} style={{ boxShadow : "0 0 2px rgba(0,0,0,0.2)" , padding : "1rem"}}>
                    <h4>Total</h4>
                    <hr></hr>
                    <Button block>Order</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}
