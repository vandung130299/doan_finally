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

/**
* @author
* @function Supplier
**/

export const Supplier = (props) => {

    const supplier = useSelector(state => state.supplier);

    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [_id,setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");




    const dispatch = useDispatch();

    useEffect(() => {
        if (supplier.message) {
            toast(supplier.message);
        }
    }, [supplier.message])

    const handleCloseCreate = () => setShowCreateModel(false);
    const handleSaveCreate = (e) => {
        e.preventDefault();
        const supplier = { name, address, note };
        dispatch(createSupplier(supplier));

        setShowCreateModel(false)
    }
    const handleShowCreate = () => setShowCreateModel(true);

    const handleCloseUpdate = () => setShowUpdateModel(false);

    const handleShowUpdate = (supplier) => {
        // e.preventDefault();
        setId(supplier._id)
        // const supplier = {_id, name, address, note };
        setName(supplier.name)
        setAddress(supplier.address)
        setNote(supplier.note)
        setShowUpdateModel(true);
    }

    const handleSaveUpdate = (e) => {
        e.preventDefault();
        const supplier = {_id, name, address, note };
        dispatch(createSupplier(supplier));
        setShowCreateModel(false)

    }

    const renderSupplers = () => {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Supplier name</th>
                        <th>Address</th>
                        <th>Note</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        supplier.suppliers ?
                            supplier.suppliers.map((supplier, index) =>
                                <tr key={supplier.id}>
                                    <td>{index + 1}</td>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.address}</td>
                                    <td>{supplier.note}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            onClick={() => handleShowUpdate(supplier)}
                                        >
                                            Sửa
                                        </Button>
                                    </td>

                                </tr>
                            ) : null
                    }

                </tbody>
            </Table>
        )
    }


    const renderCreateSupplier = () => {
        return (
            <NewModal
                show={showCreateModel}
                handleClose={handleCloseCreate}
                modalTitle={'New Supplier'}
                handleSave={handleSaveCreate}
            >
                <Input
                    value={name}
                    placeholder={'Name'}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    value={address}
                    placeholder={'Address'}
                    onChange={(e) => { setAddress(e.target.value) }}
                // errorMessage={'no no'}
                />
                <Input
                    value={note}
                    placeholder={'Note'}
                    onChange={(e) => { setNote(e.target.value) }}
                />

            </NewModal>
        )
    }

    const renderUpdateSupplier = () => {
        return (
            <NewModal
                show={showUpdateModel}
                handleClose={handleCloseUpdate}
                modalTitle={'Update Supplier'}
                handleSave={handleSaveUpdate}
            >
                <Input
                    value={name}
                    placeholder={'Name'}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    value={address}
                    placeholder={'Address'}
                    onChange={(e) => { setAddress(e.target.value) }}
                />
                <Input
                    value={note}
                    placeholder={'Note'}
                    onChange={(e) => { setNote(e.target.value) }}
                />
            </NewModal>
        )
    }

    return (
        <Layout sidebar>
            <Container >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <h4>Supplier Management</h4>
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
                        {renderSupplers()}
                    </Col>
                </Row>
            </Container>


            {renderCreateSupplier()}

            {renderUpdateSupplier()}

            <ToastContainer />

        </Layout>
    )

}