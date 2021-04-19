import React from 'react'
import {Navbar , Nav, Container} from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className='ml-auto'>
                        <Nav.Link href="/">Catalog</Nav.Link>
                        <Nav.Link href="/login">About us</Nav.Link>
                        <Nav.Link href="/login">Contacts</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/login">Sign In/Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}
