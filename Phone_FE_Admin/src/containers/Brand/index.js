import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { createSupplier, getOrdersByAccountId } from '../../actions';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/NewModal';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../helpers/axios';
import { getAllBrand } from '../../actions/brand.action';
import { addSucessMsg, errMsg } from '../../helpers/messages';

/**
* @author
* @function Category
**/

export const Brand = (props) => {
    const brand = useSelector(state => state.brand);
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [_id, setId] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBrand());
    }, []);

    const handleCloseCreate = () => { setShowCreateModel(false); setName(''); };
    const handleSaveCreate = (e) => {
        e.preventDefault();
        axiosInstance.post(`brand`, { brandname: name }).then(res => {
            if (res.data.success) {
                dispatch(getAllBrand());
                toast.success(addSucessMsg);
            } else {
                toast.error(errMsg);
            }
            setName('');
            setId('');
            setShowCreateModel(false);
        })
    }
    const handleShowCreate = () => setShowCreateModel(true);

    const handleCloseUpdate = () => { setShowUpdateModel(false); setName(''); }

    const handleShowUpdate = (brand) => {
        setId(brand.id)
        setName(brand.brandname)
        setShowUpdateModel(true);
    }

    const handleSaveUpdate = (e) => {
        e.preventDefault();
        axiosInstance.put(`brand/${_id}`, { id: _id, brandname: name }).then(res => {
            if (res.data.success) {
                dispatch(getAllBrand());
                toast.success(addSucessMsg);
            } else {
                toast.error(errMsg);
            }
            setName('');
            setId('');
            setShowUpdateModel(false);
        })

    }
    const handleDelete = (_id) => {
        axiosInstance.delete(`brand/${_id}`).then(res => {
            if (res.status === 200) {
                dispatch(getAllBrand());
                toast.success('Delete brand success!');
            } else {
                toast.error('Can\'t delete brand!');
            }
        }).catch(error => {
            toast.error('Can\'t delete brand!');
        });
    }
    const renderBrand = () => {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brand name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        brand.brands ?
                            brand.brands.map((brand, index) =>
                                <tr key={brand.id}>
                                    <td>{index + 1}</td>
                                    <td>{brand.brandname}</td>

                                    <td>
                                        <button
                                            className='btn-save mr-2'
                                            onClick={() => handleShowUpdate(brand)}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(brand.id)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>
                                    </td>

                                </tr>
                            ) : null
                    }

                </tbody>
            </Table>
        )
    }


    const renderCreateBrand = () => {
        return (
            <NewModal
                show={showCreateModel}
                handleClose={handleCloseCreate}
                modalTitle={'New Brand'}
                handleSave={handleSaveCreate}
            >
                <Input
                    value={name}
                    placeholder={'Name'}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </NewModal>
        )
    }

    const renderUpdateBrand = () => {
        return (
            <NewModal
                show={showUpdateModel}
                handleClose={handleCloseUpdate}
                modalTitle={'Update Brand'}
                handleSave={handleSaveUpdate}
            >
                <Input
                    value={name}
                    placeholder={'Name'}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </NewModal>
        )
    }

    return (
        <Layout sidebar>
            <Container >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <h4>Brand Management</h4>
                </div>
                {/* <Row style={{ marginBottom: '50px' }}>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Danh Mục</h3>
                            <Button
                                variant="primary"
                            // onClick={handleShowCreate}
                            >
                                Tạo Danh Mục Mới
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
                        {renderBrand()}
                    </Col>
                </Row>
            </Container>


            {renderCreateBrand()}

            {renderUpdateBrand()}

            <ToastContainer />

        </Layout>
    )

}