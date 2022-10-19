import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { createReceipt } from '../../actions';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/NewModal';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalReceipt from './modal';

export const Receipt = (props) => {
    const formatCash = (cash) => cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');


    const receipt = useSelector(state => state.receipt);
    const product = useSelector(state => state.product);

    const [receiptDetail, setReceiptDetail] = useState(null);

    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showCreateModel2, setShowCreateModel2] = useState(false);

    const [address, setAddress] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");


    const [sl, setSl] = useState(0);
    const [bang, setBang] = useState([]);
    const [arrayProduct, setArrayProduct] = useState([]);


    const dispatch = useDispatch();

    const showReceiptDetails = (receipt) => {
        setReceiptDetail(receipt);
    };

    const closeModal=() => {
        setReceiptDetail(null);
    }

    const renderOrderDetails = () => {
        if(receiptDetail) {
        return <ModalReceipt receiptDetail={receiptDetail} closeModal={closeModal}/>
        }
        return null;
    }


    const handleCloseCreate = () => setShowCreateModel(false);
    const handleCloseCreate2 = () => setShowCreateModel2(false);
    const handleSaveCreate = (e) => {
        e.preventDefault();
        setShowCreateModel(false)
        const mapItem = [];
        for (let i = 0; i < sl; i++) {

            mapItem.push(i);
        }
        setBang(mapItem)
        let temp = []
        let item = mapItem.map((x) => {
            return {
                "productid": "",
                "pricereceipt": 0,
                "quantity": 0,
            }
        })
        console.log('item', item)

        setArrayProduct(item)
        console.log('arrayProduct', arrayProduct)
        if (sl > 0) {
            setShowCreateModel2(true)
        }
    }
    const handleShowCreate = () => setShowCreateModel(true);
    const handleSaveCreate2 = (e) => {
        e.preventDefault();

        const totalAmount = arrayProduct.reduce((temp, item) =>
            temp + item.productPrice * item.productQty
            , 0)

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var receiptDate = date + ' ' + time;
        const receipt = {
            address,
            company, phone,
            receiptItems: arrayProduct,
            
            receiptDate
        }
        console.log('receipt', receipt)
        dispatch(createReceipt(receipt))
        setShowCreateModel2(false);
    }


    const renderReceipts = () => {
        return (
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>Receipt date</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        receipt.receipts ?
                            receipt.receipts.map((receipt, index) =>
                                <>
                                    <tr key={receipt.id}>
                                        <td>{index + 1}</td>
                                        <td>{receipt.id}</td>
                                        <td>{receipt.company}</td>
                                        <td>{receipt.address}</td>
                                        <td>{receipt.receiptDate}</td>

                                        <td>{receipt.receiptItems.length}</td>
                                        <td>{formatCash(receipt.totalmoney)}  ₫</td>
                                        <td>
                                            <Button
                                                variant="light"
                                                onClick={(e) => { showReceiptDetails(receipt) }}
                                                data-toggle="tooltip" data-placement="top" title="View detail receipt"
                                            >
                                                <i className="fa-solid fa-eye"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                </>
                            ) : null
                    }

                </tbody>
            </Table>
        )
    }



    const renderCreateReceipt = () => {
        return (
            <NewModal
                size={'lg'}
                show={showCreateModel}
                handleClose={handleCloseCreate}
                modalTitle={'New Receipt'}
                handleSave={handleSaveCreate}
            >

                <Input
                    type={'text'}
                    label={'Company'}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={'Company'}
                />
                <Input
                    type={'text'}
                    label={'Address'}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={'Address'}
                />
                <Input
                    type={'text'}
                    label={'Phone'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={'Phone'}
                />


                <Input
                    type={'number'}
                    label={'Quantity'}
                    value={sl}
                    onChange={(e) => { setSl(e.target.value); }}
                    placeholder={'Quantity'}
                />

            </NewModal>
        )
    }

    const onChangeProductId = (e, x) => {
        let value = e.target.value;
        console.log('arrayProduct', arrayProduct);
        arrayProduct[x].productid = value
        setArrayProduct([...arrayProduct])
    }

    const onChangeProductPrice = (e, x) => {
        let value = e.target.value;
        console.log('arrayProduct', arrayProduct);
        arrayProduct[x].pricereceipt = value
        setArrayProduct([...arrayProduct])
    }

    const onChangeProductQty = (e, x) => {
        let value = e.target.value;
        console.log('arrayProduct', arrayProduct);
        arrayProduct[x].quantity = value
        setArrayProduct([...arrayProduct])
    }

    const renderCreateReceipt2 = () => {
        return (
            <NewModal
                size={'lg'}
                show={showCreateModel2}
                handleClose={handleCloseCreate2}
                modalTitle={'Tạo Đơn Nhập Hàng Mới'}
                handleSave={handleSaveCreate2}
            >

                {JSON.stringify(arrayProduct)}
                {
                    bang.map((x, index) => <>
                        <Row key={index}>
                            <Col>
                                <Input
                                    type={'select'}
                                    label={'Ten San Pham'}
                                    value={arrayProduct[x].id}
                                    onChange={(e) => onChangeProductId(e, x)}
                                    placeholder={'Select Product Parent'}
                                >
                                    {product.products.map(option =>
                                        <option key={option.id} value={option.value}>{option.productname}</option>
                                    )}
                                </Input>
                            </Col>
                            <Col>
                                <Input
                                    type={'number'}
                                    label={'Giá Nhập'}
                                    value={arrayProduct[x].price}
                                    onChange={(e) => onChangeProductPrice(e, x)}
                                />
                            </Col>
                            <Col>
                                <Input
                                    type={'number'}
                                    label={'Số lượng'}
                                    value={arrayProduct[x].quantity}
                                    onChange={(e) => onChangeProductQty(e, x)}
                                />
                            </Col>
                        </Row>
                    </>)
                }

            </NewModal>
        )
    }

    return (
        <Layout sidebar>
            <Container >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <h4>Receipt Management</h4>
                </div>
                {/* <Row style={{ marginBottom: '50px' }}>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Hoá Đơn Nhập Hàng</h3>
                            <Button
                                variant="primary"
                                onClick={handleShowCreate}
                            >
                                Tạo Đơn Nhập Mới
                            </Button>
                        </div>
                    </Col>
                </Row> */}
                <Row>
                    <Col md={12}>
                        <button
                            className='btn-save'
                            onClick={handleShowCreate}
                            style={{ float: 'right', marginBottom: 15 }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        {renderReceipts()}
                    </Col>
                </Row>
            </Container>


            {renderCreateReceipt()}
            {renderCreateReceipt2()}
            {receiptDetail ? renderOrderDetails() : null}

            <ToastContainer />

        </Layout>
    )

}