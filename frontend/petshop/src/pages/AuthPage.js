import React, { useState, useContext } from 'react'
import {Button, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import { login, registration } from '../requests/userAPI';
import {observer } from 'mobx-react-lite'
import {Context} from '../index'
import { HOME_ROUTE } from '../utils/constants';


const AuthPage = observer(() => {
    const {user} = useContext(Context)
    const currentLocation = useLocation();
    const isLogin = currentLocation.pathname === '/login';
    const userHistory = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const clickHandle = async () => {
        console.log('Is login : ',isLogin)
        try{
            let data;
            if(isLogin) {
                data = await login(email, password);
            }else {
                data = await registration(email, password, firstName, lastName);
            }
            user.setUser(user)
            user.setIsAuth(true)
            userHistory.push(HOME_ROUTE)
            console.log(user)
        } catch(e) {
            console.log(e.response.data.message)
        }
    }
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 60}}>
                <Card style={{width: 500}} className="p-5">
                    <h2 className="m-auto">{ isLogin ? "Authorization" : "Registration"}</h2>
                    <Form className="d-flex flex-column pt-3">
                        {isLogin ? 
                        <>
                            <Form.Group >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password please" value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                        </>
                        : 
                        <>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password please" value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={"text-danger" ? confirmPassword != password : "text-success"}>Confirm password {password != confirmPassword ? <small className="text-danger"> . Passwords are not the same</small> : ""}</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password again please" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                            </Form.Group>
                        </>
                        }
                        <Row>
                            { isLogin ? <NavLink to="/register" className="py-2 ml-auto">Don't have an account?</NavLink> : <NavLink to="/login" className="py-2 ml-auto">Already have an account?</NavLink>}
                        </Row>
                        <Button className="mt-2" variant={"outline-primary"} onClick={() => clickHandle()}>{isLogin ? "Log in" : "Register"}</Button>
                    </Form>
                </Card>
            </Container>
        </div>
    )
})

export default AuthPage;