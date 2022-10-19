import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProductById, updateProduct } from '../../actions'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import NewModal from '../../components/UI/NewModal'
import { generatePublicUrl } from '../../urlConfig'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
* @author
* @function Products
**/

const Products = (props) => {

    const formatCash = (cash) => cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');


    const [productname, setProductname] = useState('');
    const [imageurl, setImageurl] = useState('');
    const [infodesign, setInfodesign] = useState('');
    const [infomation, setInfomation] = useState('');
    const [monitor, setMonitor] = useState('');
    const [system, setSystem] = useState('');
    const [cpu, setCpu] = useState('');
    const [ram, setRam] = useState('');
    const [pin, setPin] = useState('');
    const [thietKe, setThietKe] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [productImages, setProductImages] = useState([]);

    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [productItem, setProductItem] = useState(null);

    const [showUpdateModal, setShowUpdateModal] = useState(false);


    const category = useSelector(state => state.category);
    const brand = useSelector(state => state.brand);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        toast(product.notification);
    }, [product.notification])

    const handleClose = () => setShow(false);
    const handleSave = (e) => {
        e.preventDefault();

        const form = {
            productname,
            price,
            total: 0,
            sold: 0,
            infodesign,
            infomation,
            monitor,
            system,
            cpu,
            ram,
            thietKe,
            pin,
            categoryId,
            brandId,
            imageurl
        }

        console.log({ form })

        dispatch(addProduct(form));

        setProductname(''); setPrice('');
        setCategoryId(''); setProductImages('');

        setShow(false)
    }
    const handleShow = () => setShow(true);

    //update
    const closeUpdateProductForm = () => {
        setShowUpdateModal(false);
    }
    const onUpdateProduct = (product) => {
        setShowUpdateModal(true);
        setProductItem(product)
        renderUpdateProductModal();
    }

    const updateProductForm = () => {

        let id = productItem.id;
        let productname = productItem.productname;
        let price = productItem.price;
        let total = productItem.total;
        let sold = productItem.sold;
        let infodesign = productItem.infodesign;
        let infomation = productItem.infomation;
        let monitor = productItem.monitor;
        let system = productItem.system;
        let cpu = productItem.cpu;
        let ram = productItem.ram;
        let thietKe = productItem.thietKe;
        let pin = productItem.pin;
        let imageurl = productItem.imageurl;

        // let category = productItem.category.id;
        let categoryId = productItem.category ? productItem.category.id : 123456789;
        let brandId = productItem.brand ? productItem.brand.id : 123456789;
        const payload = {
            id,
            productname,
            price,
            total,
            sold,
            infodesign,
            infomation,
            monitor,
            system,
            cpu,
            ram,
            thietKe,
            pin,
            imageurl,
            categoryId,
            brandId,
        }

        dispatch(updateProduct(payload));

        setShowUpdateModal(false);
    }



    // xu ly upload file
    const handleProductImages = (e) => {
        //console.log( "e.target.files[0]",e.target.files[0])
        setProductImages([
            ...productImages,
            e.target.files[0]
        ]);
    }



    const renderProducts = () => {
        return (
            <Table style={{ fontSize: '12px' }} responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sold</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map((product, index) =>
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.productname}</td>
                                    <td>{formatCash(product.price)} ₫ </td>
                                    <td>{product.total}</td>
                                    <td>{product.sold}</td>

                                    <td>{
                                        product.category &&
                                            product.category.categoryname ?
                                            product.category.categoryname : <span style={{ color: 'red' }}>Danh Mục Đã Bị Xóa</span>}</td>

                                    <td>{
                                        product.brand &&
                                            product.brand.brandname ?
                                            product.brand.brandname : <span style={{ color: 'red' }}>Nhãn Hiệu Đã Bị Xóa</span>}</td>


                                    <td style={{ display: 'flex' }}>
                                        <Button data-toggle="tooltip" data-placement="top" title="View detail order" variant="light" onClick={() => showProductDetailsModal(product)}>
                                            <i className="fa-solid fa-eye"></i>
                                        </Button>
                                        <div style={{ marginRight: "10px" }}></div>
                                        <Button variant="success" onClick={() => onUpdateProduct(product)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <div style={{ marginRight: "10px" }}></div>
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                const payload = {
                                                    productId: product._id,
                                                };
                                                dispatch(deleteProductById(payload));
                                            }}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>

                                    </td>
                                </tr>
                            )
                            : null
                    }
                </tbody>
            </Table>
        )
    }

    const renderAddProductModal = () => {
        return (
            <NewModal
                show={show}
                handleClose={handleClose}
                modalTitle={'New Product'}
                handleSave={handleSave}
            >
                <Input
                    value={productname}
                    placeholder={'Product name'}
                    onChange={(e) => { setProductname(e.target.value) }}
                />

                <Input
                    type={'number'}
                    value={price}
                    placeholder={'price'}
                    onChange={(e) => { setPrice(e.target.value) }}
                />
                <Input
                    value={infodesign}
                    placeholder={'Specifications'}
                    onChange={(e) => { setInfodesign(e.target.value) }}
                />
                <Input
                    value={infomation}
                    placeholder={'Infomation'}
                    onChange={(e) => { setInfomation(e.target.value) }}
                />
                <Input
                    value={monitor}
                    placeholder={'Monitor'}
                    onChange={(e) => { setMonitor(e.target.value) }}
                />
                <Input
                    value={system}
                    placeholder={'System'}
                    onChange={(e) => { setSystem(e.target.value) }}
                />
                <Input
                    value={cpu}
                    placeholder={'Cpu'}
                    onChange={(e) => { setCpu(e.target.value) }}
                />
                <Input
                    value={ram}
                    placeholder={'Ram'}
                    onChange={(e) => { setRam(e.target.value) }}
                />
                <Input
                    value={thietKe}
                    placeholder={'Design'}
                    onChange={(e) => { setThietKe(e.target.value) }}
                />
                <Input
                    value={pin}
                    placeholder={'pin'}
                    onChange={(e) => { setPin(e.target.value) }}
                />

                <Input
                    value={imageurl}
                    placeholder={'Image'}
                    onChange={(e) => { setImageurl(e.target.value) }}
                />

                <Input
                    type={'select'}
                    placeholder={'Category'}
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    {category.categories.map(option =>
                        <option key={option.id} value={option.value}>{option.categoryname}</option>
                    )}
                </Input>

                <Input
                    type={'select'}
                    placeholder={'Brand'}
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}
                >
                    {brand.brands.map(option =>
                        <option key={option.id} value={option.value}>{option.brandname}</option>
                    )}
                </Input>


            </NewModal>
        )
    }

    const renderUpdateProductModal = (productItem) => {
        if (!productItem) {
            return null;
        } else {
            console.log(productItem)
            return (
                <NewModal
                    show={showUpdateModal}
                    handleClose={closeUpdateProductForm}
                    modalTitle={'Update product'}
                    handleSave={updateProductForm}
                >
                    <Input
                        value={productItem.productname}
                        placeholder={'product name'}
                        onChange={(e) => { setProductItem({ ...productItem, productname: e.target.value }) }}
                    />
                    <Input
                        type={'number'}
                        value={productItem.total}
                        placeholder={'Quantity'}
                        onChange={(e) => { setProductItem({ ...productItem, total: e.target.value }) }}
                        style={{ display: 'none' }}
                    />
                    <Input
                        type={'number'}
                        value={productItem.sold}
                        placeholder={'Sold'}
                        onChange={(e) => { setProductItem({ ...productItem, sold: e.target.value }) }}
                        style={{ display: 'none' }}
                    />
                    <Input
                        type={'number'}
                        value={productItem.price}
                        placeholder={'Price'}
                        onChange={(e) => { setProductItem({ ...productItem, price: e.target.value }) }}
                    />

                    <Input
                        value={productItem.infodesign}
                        placeholder={'Specifications'}
                        onChange={(e) => { setProductItem({ ...productItem, infodesign: e.target.value }) }}
                    />
                    <Input
                        value={productItem.infomation}
                        placeholder={'Infomation'}
                        onChange={(e) => { setProductItem({ ...productItem, infomation: e.target.value }) }}
                    />
                    <Input
                        value={productItem.monitor}
                        placeholder={'Monitor'}
                        onChange={(e) => { setProductItem({ ...productItem, monitor: e.target.value }) }}
                    />
                    <Input
                        value={productItem.system}
                        placeholder={'System'}
                        onChange={(e) => { setProductItem({ ...productItem, system: e.target.value }) }}
                    />
                    <Input
                        value={productItem.cpu}
                        placeholder={'Cpu'}
                        onChange={(e) => { setProductItem({ ...productItem, cpu: e.target.value }) }}
                    />
                    <Input
                        value={productItem.ram}
                        placeholder={'Ram'}
                        onChange={(e) => { setProductItem({ ...productItem, ram: e.target.value }) }}
                    />
                    <Input
                        value={productItem.thietKe}
                        placeholder={'Design'}
                        onChange={(e) => { setProductItem({ ...productItem, thietKe: e.target.value }) }}
                    />
                    <Input
                        value={productItem.pin}
                        placeholder={'Pin'}
                        onChange={(e) => { setProductItem({ ...productItem, pin: e.target.value }) }}
                    />
                    <Input
                        value={productItem.imageurl}
                        placeholder={'Imageurl'}
                        onChange={(e) => { setProductItem({ ...productItem, imageurl: e.target.value }) }}
                    />
                    {/* {
                        productItem.category ?
                            <Input
                                type={'select'}
                                value={productItem.category.id}
                                onChange={(e) => { setProductItem({ ...productItem, category: { name: productItem.category.name, id: e.target.value } }) }}
                                placeholder={productItem.category &&
                                    productItem.category.name ?
                                    productItem.category.name : 'Danh Mục Đã Bị Xóa'}
                            >
                                {createCategoryList(category.categories).map(option =>
                                    <option key={option.value} value={option.id}>{option.name}</option>
                                )}
                            </Input>
                            :
                            <Input
                                className="form-control"
                                value={productItem.categoryId}
                                onChange={(e) => { setProductItem({ ...productItem, category: { id: e.target.value } }) }}
                                placeholder={'Danh Mục Đã Bị Xóa'}
                            >
                                {createCategoryList(category.categories).map(option =>
                                    <option key={option.value} value={option.value}>{option.name}</option>
                                )}
                            </Input>



                    } */}


                    <Input
                        type={'select'}
                        // placeholder={'Danh Mục'}
                        onChange={(e) => { setProductItem({ ...productItem, category: { id: e.target.value } }) }}
                        placeholder={productItem.category &&
                            productItem.category.categoryname ?
                            productItem.category.categoryname : 'Category removed!'}
                    >
                        {category.categories.map(option =>
                            <option key={option.id} value={option.value}>{option.categoryname}</option>
                        )}
                    </Input>

                    <Input
                        type={'select'}
                        // placeholder={'Nhãn Hiệu'}
                        onChange={(e) => { setProductItem({ ...productItem, brand: { id: e.target.value } }) }}
                        placeholder={productItem.brand &&
                            productItem.brand.brandname ?
                            productItem.brand.brandname : 'Brand removed!'}
                    >
                        {brand.brands.map(option =>
                            <option key={option.id} value={option.value}>{option.brandname}</option>
                        )}
                    </Input>


                </NewModal>
            )
        }

    }

    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }

    const showProductDetailsModal = (product) => {
        setProductDetails(product);
        setProductDetailModal(true);

    }

    const renderProductDetailsModal = () => {
        if (!productDetails) {
            return null;
        }
        return (
            <NewModal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Product Details'}
                size={'lg'}
            >
                <Row>
                    <Col md={6}>
                        <label className="key">Product name</label>
                        <p className="value">{productDetails.productname}</p>
                    </Col>
                    <Col md={6}>
                        <label className="key">Price</label>
                        <p className="value">{productDetails.price}  ₫</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label className="key">Quantity</label>
                        <p className="value">{productDetails.total}</p>
                    </Col>
                    <Col md={6}>
                        <label className="key">Sold</label>
                        <p className="value">{productDetails.sold}</p>
                    </Col>
                    <Col md={6}>
                        <label className="key">Category</label>
                        <p className="value">{productDetails.category.categoryname}</p>
                    </Col>
                    <Col md={6}>
                        <label className="key">Brand</label>
                        <p className="value">{productDetails.brand.brandname}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <label className="key">Discription</label>
                        <p className="value">{productDetails.infomation}</p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <label className="key">Images</label>
                        <div style={{ display: 'flex' }}>
                            {
                                <div className="productImgContainer">
                                    <img src={productDetails.imageurl} alt='some' />
                                </div>
                            }
                        </div>
                    </Col>
                </Row>

            </NewModal >
        )
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
                            onClick={handleShow}
                            style={{ float: 'right', marginBottom: 15 }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>

            {/* Model Add */}
            {renderAddProductModal()}

            {/* Model Product Details */}
            {renderProductDetailsModal()}

            {renderUpdateProductModal(productItem)}

            <ToastContainer />

        </Layout>
    )

}

export default Products