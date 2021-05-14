import React, { useContext, useState } from 'react'
import {Navbar , Nav, Container, Dropdown} from 'react-bootstrap';
import { Context } from '../index';

export default function Header() {
    const {user} = useContext(Context);
    console.log(user)
    console.log('Is auth ', user.isAuth)
    const handleLogOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        console.log(user)
    }

    return (
        <>
        <style>
            {`
                .dropdown-toggle {
                    padding : 0;
                    margin-right : 1rem;
                }
                .dropdown-toggle::after {
                    display: none;
                }
            `}
        </style>
        <header className="header">
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className='ml-auto'>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor : 'transparent', border : "none", padding : 0}} id="dropdown-basic">
                                    Categories
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/?productCategory=Feed">Feed</Dropdown.Item>
                                    <Dropdown.Item href="/?productCategory=Medications">Medications</Dropdown.Item>
                                    <Dropdown.Item href="/?productCategory=Furniture">Furniture</Dropdown.Item>
                                    <Dropdown.Item href="/?productCategory=Toys">Toys</Dropdown.Item>
                                    <Dropdown.Item href="/?productCategory=Delicacy">Delicacy</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor : 'transparent', border : "none"}} id="dropdown-basic">
                                    Pets
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">For cats</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">For dogs</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">For birds</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">For fishes</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor : 'transparent', border : "none"}} id="dropdown-basic">
                                    Cats
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Feed</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Medications</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Furniture</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor : 'transparent', border : "none"}} id="dropdown-basic">
                                    Dogs
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Feed</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Medications</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Furniture</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor : 'transparent', border : "none"}} id="dropdown-basic">
                                    Birds
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Feed</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Medications</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Furniture</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor : 'transparent', border : "none"}} id="dropdown-basic">
                                    Fishes
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Feed</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Medications</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Furniture</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        { user.isAuth === true ? <Nav.Link href="/" onClick={() => handleLogOut()}>Log out</Nav.Link> : <Nav.Link href="/login">Sign In/Up</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
        </>
    )
}
