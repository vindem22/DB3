import React from 'react'
import { Button , Form, FormGroup} from 'react-bootstrap'

export const CartProductRow = ({cartProduct, index}) => {
    console.log('d')
    return (
        <>
            <tr>
                <td width="5%">{index}</td>
                <td width="25%">{cartProduct.p_productName}</td>
                <td width="15%" align="center"><img className="mx-auto" height="80px" width="80px" src={`http://localhost:9890/${cartProduct.p_productImg}`}></img></td>
                <td width="25%">{cartProduct.p_price}</td>
                <td>{1}</td>
                <FormGroup as="td">
                    <Button className="mr-2" variant="success" block>Add</Button>
                    <Button variant="danger" block>Remove</Button>
                </FormGroup>
            </tr>
        </>
    )
}
