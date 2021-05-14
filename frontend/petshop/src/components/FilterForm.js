import React, {useState} from 'react'
import {Form, Row, Col} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

export const FilterForm = () => {
    const formGroupClass = {
        padding : "2rem",
        borderBottom : "1px solid rgba(0,0,0,0.1)"
    }
    const [price, setPrice] = useState(1000);

    return (
        <>
          <Form className="shadow-sm py-3">
              <Form.Group style={formGroupClass}>
                  <Form.Label>Price</Form.Label>
                  <Row>
                    <Form.Control className="mb-3" type="range" min={1000} max={100000} step={100} value={price} onChange={e => setPrice(e.target.value)}></Form.Control>
                    <Form.Control placeholder="Price" value={price} onChange={e => setPrice(e.target.value)}></Form.Control>
                  </Row>
              </Form.Group>
              <Form.Group style={formGroupClass}>
                  <Form.Label>Pet</Form.Label>
                  <Form.Check type="checkbox" label="Cat"></Form.Check>
                  <Form.Check type="checkbox" label="Dog"></Form.Check>
                  <Form.Check type="checkbox" label="Rodent"></Form.Check>
                  <Form.Check type="checkbox" label="Fish"></Form.Check>
                  <Form.Check type="checkbox" label="Bird"></Form.Check>
              </Form.Group>
              <Form.Group style={formGroupClass}>
                  <Form.Label>Category</Form.Label>
                  <Form.Check type="checkbox" label="Food"></Form.Check>
                  <Form.Check type="checkbox" label="Toys"></Form.Check>
                  <Form.Check type="checkbox" label="Clothes"></Form.Check>
                  <Form.Check type="checkbox" label="Medicines"></Form.Check>
                  <Form.Check type="checkbox" label="Furniture"></Form.Check>
              </Form.Group>
          </Form>
        </>
    )
}
