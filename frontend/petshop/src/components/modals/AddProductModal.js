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
                        <Form.Control placeholder="Enter product title" className="mb-2"></Form.Control>
                        <Form.Control placeholder="Enter product description" className="mb-2"></Form.Control>
                        <Form.Control placeholder="Enter product category" className="mb-2"></Form.Control>
                        <Form.Group className='px-4'>
                            <Row>
                                <Form.Label>Price</Form.Label>
                            </Row>
                            <Row>
                                <Col md={6} sm={6}>
                                    <RangeSlider min={1000} max={maxPrice} step={100} value={minPrice} onChange={e => setMinPrice(e.target.value)} tooltipPlacement='top' tooltip='on'></RangeSlider>
                                </Col>
                                <Col md={6} sm={4}>
                                    <Form.Control placeholder="Enter product price" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="mb-2"></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.File></Form.File>
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