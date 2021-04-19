import React, {useState, useEffect} from 'react';
import {Row, Col, Pagination} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2)
    }
}));

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function HomePage() {
    const classes = useStyles();
    let query = useQuery()
    const [pages,setPages] = useState(0);
    const currentPage = parseInt(query.get('page')) || 1;
    const [products, setProducts] = useState([]);
    let paginationItems = [];


    useEffect(() => {
        axios.get("http://localhost:9890/api/product/")
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


    console.log(query.get('page'))

    return (
        <div>
            <Row>
                {products.map(product => (
                    <Col key={product.p_productId} sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
            <Row className='d-flex justify-content-center'>
                <Pagination className='justify-self-center'>
                    <Pagination.First href={'/'} />
                    <Pagination.Prev href={`/?page=${currentPage - 1}`}/>
                    <Pagination.Ellipsis />
                    {paginationItems}
                    <Pagination.Ellipsis />
                    <Pagination.Item>{pages}</Pagination.Item>
                    <Pagination.Next href={`/?page=${currentPage + 1}`} />
                    <Link to={`/?pages=250`}>
                        <Pagination.Last/>
                    </Link>
                </Pagination>
            </Row>
        </div>
    )
}
