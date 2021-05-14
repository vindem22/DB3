import React,{useState} from 'react'
import { Form , Modal, Button, Row , Col} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

export default function AddProductModal({ show, onHide}) {
    const [minPrice, setMinPrice] = useState(1000)
    const [maxPrice, setMaxPrice] = useState(100000)
    
    return (
        <>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="Enter customer id" className="mb-2"></Form.Control>
                        <Form.Group className='px-4'>
                            <Row>
                                <Form.Label>Order Date</Form.Label>
                            </Row>
                            <Row>
                                <Col className="mx-auto" md={6} sm={6}>
                                    <input type="datetime-local" min="2021-01-01T00:00" max="2050-01-01T23:59"></input>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Add item
                </Button>
            </Modal.Footer>
        </Modal>          
        </>
    )
}