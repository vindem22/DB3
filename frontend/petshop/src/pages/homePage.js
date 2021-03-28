import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import ProductCard from '../components/productCard'
import Container from '@material-ui/core/Container'
import axios from 'axios'


export default function HomePage() {
    const links = [
        {title : 'Products', path:"/products"} , 
        {title : 'About', path:"/about"}, 
        {title : 'Contact', path: "/contact" }, 
        {title : 'FAQ', path:"/faq"}
    ]
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9890/api/product/")
            .then(response => {
                setProducts(response.data)
            })

    }, [setProducts])
    console.log(products[0])

    const productsStyle = {
        display : "flex",
        justifyContent : "start",
        flexWrap : "wrap",
    }

    return (
        <div>
            <Navbar links={links}></Navbar>
            <Container style={productsStyle}>
                {products.map(product => (
                    <ProductCard product={product}></ProductCard>
                ))}
            </Container>
        </div>
    )
}
