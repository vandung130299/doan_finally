import React, {  useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import {  login } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading'
/**
* @author
* @function Signin
**/

const Signin = (props) => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const loading =  useSelector((state) => state.loading);
    // su dung dispatch
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            usernameOrEmail, password
        }
        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            { loading ? <Loading/> : null }
            <Container>
                <Row style={{ marginTop: '150px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Username Or Email"
                                placeholder="Email"
                                value={usernameOrEmail}
                                type="text"
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>

    )

}

export default Signin