import React, {useState, useEffect} from 'react';
import {Row, Col, Pagination, Container} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FilterForm } from '../components/FilterForm';
import {ImageSlider} from '../components/ImageSlider'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function HomePage(props) {
    let query = useQuery()
    const [pages,setPages] = useState(0);
    const currentPage = parseInt(query.get('page')) || 1;
    const [products, setProducts] = useState([]);
    let paginationItems = [];

    let url = `http://localhost:9890/api/product/${currentPage === 1 ? '' : '?page=' + currentPage}`

    if(query.get('pet')) {
         url = url + `${currentPage != 1 ? '&pet=' + query.get('pet') : '?pet=' + query.get('pet')}`
    }
    if(query.get('productCategory')) {
        url = url + `${(query.get('pet') || currentPage != 1) ? '&productCategory=' + query.get('productCategory') : '?productCategory=' + query.get('productCategory')}`
    }
    
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setProducts(response.data.slice(1,-1))
            setPages(response.data.slice(-1)[0].pagesCount)
        })
        
    }, [setProducts, setPages])

    const initVar = currentPage === pages ? pages - 10 : currentPage;
    const condtionChecker = currentPage === pages ? pages : currentPage + 10; 

    for (let number = initVar; number < condtionChecker; number++) {
        paginationItems.push(
            <Pagination.Item key={number} active={number === currentPage} href={`/?page=${number}`}>
                {number}
            </Pagination.Item>
        )
    }


    return (
        <>
            <Row className="w-100 d-none d-xl-block mb-5 shadow">
                <Col className="w-100 p-0">
                    <ImageSlider className="border"></ImageSlider>
                </Col>
            </Row>
            <Row>
                <Col className="d-none d-xl-block" xl={2}>
                    <FilterForm></FilterForm>
                </Col>
                <Col xl={10} lg={10}>
                    <Row>
                    {products.map(product => (
                        <Col key={product.p_productId} sm={12} md={6} lg={4} xl={3}>
                            <ProductCard product={product}/>
                        </Col>
                    ))}
                    </Row>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Pagination className='justify-self-center'>
                    <Pagination.First href={'/'} />
                    <Pagination.Prev href={`/?page=${currentPage - 1}`}/>
                    <Pagination.Ellipsis/>
                    {paginationItems}
                    <Pagination.Ellipsis />
                    <Pagination.Item>{pages}</Pagination.Item>
                    <Pagination.Next href={`/?page=${currentPage + 1}`} />
                    <Link to={`/?pages=200`}>
                        <Pagination.Last/>
                    </Link>
                </Pagination>
            </Row>
        </>
    )
}
