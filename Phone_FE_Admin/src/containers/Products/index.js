import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatCash } from '../../asset/format'
import ModalProduct from './ModalProduct'
import axiosInstance from '../../helpers/axios'
import { getProducts } from '../../actions'

const Products = (props) => {
    const [infoProduct, setInfoProduct] = useState({ id: null, isShowModal: false });
    const handleShow = () => setInfoProduct({
        ...infoProduct,
        isShowModal: !infoProduct.isShowModal
    });
    const handleHideModal = () => {
        setInfoProduct({ isShowModal: false, id: null });
        dispatch(getProducts());
    };

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])
    const renderProducts = () => {
        return (
            <Table style={{ fontSize: '12px' }} responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Số Lượng Đã Bán</th>
                        <th>Danh Mục</th>
                        <th>Nhãn Hiệu</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map((product, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.productname}</td>
                                    <td>{formatCash(product.price)} ₫ </td>
                                    <td>{product.total}</td>
                                    <td>{product.sold}</td>
                                    <td>{product.category?.categoryname}</td>
                                    <td>{product.brand?.brandname}</td>
                                    <td style={{ width: '5%', textAlign: 'center' }}>
                                        <DropdownButton align="end" title="" variant="light">
                                            <Dropdown.Item onClick={() => setInfoProduct({ isShowModal: true, id: product.id })}><i className="fa-solid fa-pen-to-square"></i><span style={{ paddingLeft: '10px' }}>Edit</span></Dropdown.Item>
                                            <Dropdown.Item onClick={() => { onDelete(product.id) }}><i className="fa-solid fa-trash"></i><span style={{ paddingLeft: '10px' }}>Delete</span></Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            )
                            : null
                    }
                </tbody >
            </Table >
        )
    }
    const onDelete = (_id) => {
        axiosInstance.delete(`product/${_id}`).then(res => {
            if (res.status === 200) {
                dispatch(getProducts());
                toast.success('Delete product success!');
            } else {
                toast.error('Can\'t delete product!');

            }
        }).catch(error => {
            toast.error('Can\'t delete product!');
        });
    }
    return (
        <Layout sidebar>
            <Container >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <h4>Product Management</h4>
                </div>
                <Row>
                    <Col md={12}>
                        <button
                            className='btn-save'
                            onClick={() => setInfoProduct({ id: null, isShowModal: true })}
                            style={{ float: 'right', marginBottom: 15 }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>
            {infoProduct.isShowModal ? <ModalProduct info={infoProduct} handleShow={handleShow} onHide={handleHideModal} /> : null}
            <ToastContainer />
        </Layout>
    )

}

export default Products