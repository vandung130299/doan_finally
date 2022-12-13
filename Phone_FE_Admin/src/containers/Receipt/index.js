import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatVnd } from '../../helpers/formatMoney';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReceipt } from '../../actions';
import ModalReceipt from './modalReceipt';
import ModalViewReceipt from './modal';

export const Receipt = (props) => {
    const [infoReceipt, setInfoReceipt] = useState({ receiptItem: null, isShowModal: false });
    const [isShowModalCreate, setIsShowModalCreate] = useState(false);
    const handleShowModalCreate = () => setIsShowModalCreate(!isShowModalCreate);
    const handleHideModalCreate = () => setIsShowModalCreate(false);
    const receipt = useSelector(state => state.receipt);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllReceipt());
    }, [])
    const handleShowView = () => setInfoReceipt({ receiptItem: null, isShowModal: false });
    const handleShowCreate = () => setIsShowModalCreate(true);
    const renderReceipts = () => {
        return (
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Receipt Number</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>Receipt date</th>
                        <th>Quantity Product Type</th>
                        <th>Total price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        receipt.receipts ?
                            receipt.receipts.map((receipt, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{receipt.id}</td>
                                    <td>{receipt.company}</td>
                                    <td>{receipt.address}</td>
                                    <td>{receipt.receiptDate}</td>

                                    <td>{receipt.receiptItems.length}</td>
                                    <td>{formatVnd(receipt.totalmoney)}  ₫</td>
                                    <td>
                                        <Button
                                            variant="light"
                                            onClick={(e) => { setInfoReceipt({ receiptItem: receipt, isShowModal: true }) }}
                                            data-toggle="tooltip" data-placement="top" title="View detail receipt"
                                        >
                                            <i className="fa-solid fa-eye"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ) : null
                    }
                </tbody>
            </Table>
        )
    }
    return (
        <Layout sidebar>
            <Container >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <h4>Receipt Management</h4>
                </div>
                <Row>
                    <Col md={12}>
                        <button
                            className='btn-save'
                            onClick={() => handleShowCreate()}
                            style={{ float: 'right', marginBottom: 15 }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        {renderReceipts()}
                    </Col>
                </Row>
            </Container>
            {isShowModalCreate ? <ModalReceipt isShowModal={isShowModalCreate} handleShow={handleShowModalCreate} onHide={handleHideModalCreate} /> : null}
            {infoReceipt.isShowModal ? < ModalViewReceipt receiptItem={infoReceipt.receiptItem} closeModal={handleShowView} /> : null}
            <ToastContainer />
        </Layout>
    )

}