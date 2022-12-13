import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { createSupplier, getAllCategory, getOrdersByAccountId } from '../../actions';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/NewModal';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../helpers/axios';
import { addSucessMsg, errMsg } from '../../helpers/messages';

/**
* @author
* @function Category
**/

export const Category = (props) => {

    const category = useSelector(state => state.category);

    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [_id, setId] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const handleCloseCreate = () => { setShowCreateModel(false); setName('') }
    const handleSaveCreate = (e) => {
        e.preventDefault();
        axiosInstance.post(`category`, { categoryname: name }).then(res => {
            if (res.data.success) {
                dispatch(getAllCategory());
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

    const handleCloseUpdate = () => { setShowUpdateModel(false); setName('') };

    const handleShowUpdate = (category) => {
        setId(category.id)
        setName(category.categoryname)
        setShowUpdateModel(true);
    }

    const handleSaveUpdate = (e) => {
        e.preventDefault();
        axiosInstance.put(`category/${_id}`, { id: _id, categoryname: name }).then(res => {
            if (res.data.success) {
                dispatch(getAllCategory());
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
        axiosInstance.delete(`category/${_id}`).then(res => {
            if (res.status === 200) {
                dispatch(getAllCategory());
                toast.success('Delete category success!');
            } else {
                toast.error('Can\'t delete category!');
            }
        }).catch(error => {
            toast.error('Can\'t delete category!');
        });
    }
    const renderCategory = () => {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.categories ?
                            category.categories.map((category, index) =>
                                <tr key={category.id}>
                                    <td>{index + 1}</td>
                                    <td>{category.categoryname}</td>
                                    <td>
                                        <button
                                            className='btn-save mr-2'
                                            onClick={() => handleShowUpdate(category)}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(category.id)}
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

    const renderCreateCategory = () => {
        return (
            <NewModal
                show={showCreateModel}
                handleClose={handleCloseCreate}
                modalTitle={'New Category'}
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

    const renderUpdateCategory = () => {
        return (
            <NewModal
                show={showUpdateModel}
                handleClose={handleCloseUpdate}
                modalTitle={'Update Category'}
                handleSave={handleSaveUpdate}
            >
                <Input
                    value={name}
                    placeholder={'Category Name'}
                    label="Category Name"
                    onChange={(e) => { setName(e.target.value) }}
                />
            </NewModal>
        )
    }

    return (
        <Layout sidebar>
            <Container >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <h4>Category Management</h4>
                </div>
                <Row>
                    <Col md={12}>
                        <button
                            className='btn-save'
                            onClick={handleShowCreate}
                            style={{ float: 'right', marginBottom: 15 }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        {renderCategory()}
                    </Col>
                </Row>
            </Container>
            {renderCreateCategory()}
            {renderUpdateCategory()}
            <ToastContainer />
        </Layout>
    )

}