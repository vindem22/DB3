import React from 'react'
import {Button, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {NavLink, useLocation} from 'react-router-dom';


export default function AuthPage() {
    const currentLocation = useLocation();
    const isLogin = currentLocation.pathname === '/login';

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 60}}>
                <Card style={{width: 400}} className="p-5">
                    <h2 className="m-auto">{ isLogin ? "Authorization" : "Registration"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Group className="mt-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password please"/>
                        </Form.Group>
                        <Row>
                            { isLogin ? <NavLink to="/register" className="py-2 ml-auto">Don't have an account?</NavLink> : <NavLink to="/login" className="py-2 ml-auto">Already have an account?</NavLink>}
                        </Row>
                        <Button className="mt-2" variant={"outline-primary"}>{isLogin ? "Log in" : "Register"}</Button>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}
