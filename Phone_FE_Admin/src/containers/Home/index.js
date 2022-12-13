import React, { useEffect } from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { authConstants } from '../../actions/constants';
import Layout from '../../components/Layout';
import './style.css'
import { useSelector } from 'react-redux';
import Chart from '../Chart/chart';

/**
* @author
* @function Home
**/

const Home = (props) => {
    const formatCash = (cash) => cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const receipt = useSelector(state => state.receipt)
    const order = useSelector(state => state.order)
    let totalReceipt =
        receipt.receipts.reduce((totalReceipt, item) => {
            return totalReceipt + item.totalmoney
        }, 0)

    let totalOrder =
        order.orders.reduce((totalOrder, item) => {

            return totalOrder + item.totalmoney
        }, 0)
    return (
        <Layout sidebar>
            <Container >
                <Row>
                    <Col md={6} >
                        <Chart />
                    </Col>
                    <Col md={6} >
                        <Chart />
                    </Col>
                    <Col md={6} >
                        <Chart />
                    </Col>
                    <Col md={6} >
                        <Chart />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home