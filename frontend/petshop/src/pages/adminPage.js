import React, {useState} from 'react'
import { Col, Container, ListGroupItem, Row, ListGroup, Button } from 'react-bootstrap'
import AddProductModal from '../components/modals/AddProductModal';
import AddOrderModal from '../components/modals/AddOrderModal';

export default function AdminPage() {
    const [productVisible, setProductVisible] = useState(false);
    const [orderVisible, setOrderVisible] = useState(false);

    return (
        <Container>
            <Row>
                <Col sm={12} lg={4} md={3}>
                    <ListGroup>
                        <ListGroupItem className="d-flex flex-column">
                            <Button onClick={() => setProductVisible(true)}>Add product</Button>
                            <AddProductModal onHide={() => setProductVisible(false)} show={productVisible}>
                            </AddProductModal>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex flex-column">
                            <Button onClick={() => setProductVisible(true)}>Add category</Button>
                            <AddProductModal onHide={() => setProductVisible(false)} show={productVisible}>
                            </AddProductModal>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex flex-column">
                            <Button onClick={() => setOrderVisible(true)}>Add order</Button>
                            <AddOrderModal onHide={() => setOrderVisible(false)} show={orderVisible}>
                            </AddOrderModal>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col sm={12} lg={8} md={9}>

                </Col>
            </Row>
        </Container>
    )
}
