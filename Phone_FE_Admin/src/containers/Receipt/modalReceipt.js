import React, { useEffect, useState } from 'react'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Modal, Toast } from 'react-bootstrap';
import { getAllReceipt, getProducts } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/UI/Input';
import './ModalReceipt.css';
import { toast } from 'react-toastify';
import axiosInstance from '../../helpers/axios';
import { addSucessMsg } from '../../helpers/messages';

const ModalReceipt = (props) => {
  const [receipt, setReceipt] = useState({
    receiptItems: [],
    address: '',
    phone: '',
    company: ''
  });

  const [item, setItem] = useState({
    productid: '',
    quantity: null,
    pricereceipt: null
  })
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const onHandleSubmit = (e) => {
    e.preventDefault();
    // const totalAmount = receipt.receiptItems.reduce((temp, item) =>
    //   temp + item.quantity * item.pricereceipt
    //   , 0);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var receiptDate = date + ' ' + time;
    const payload = {
      ...receipt,
      receiptDate
    }
    axiosInstance.post('/receipt', payload).then(res => {
      if (res.data.success) {
        dispatch(getAllReceipt());
        toast.success(addSucessMsg);
      } else {
        toast.error(res.data.message);
      }
      props.onHide();
    })
  }

  let onChange = (e, index = 0) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (["pricereceipt", "quantity", "productid"].includes(name)) {
      receipt.receiptItems[index] = {
        ...receipt.receiptItems[index],
        [name]: value
      };
      setReceipt({
        ...receipt
      });
    } else {
      setReceipt({
        ...receipt,
        [name]: value
      });
    }

  }
  const showListProduct = (products) => {
    let result = null;
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return (
          <option key={index} value={product.id}>
            {product.productname}
          </option>
        );
      })
    }
    return result;
  }
  let onChangeProduct = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    setItem({
      ...item,
      [name]: value
    });
  }
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <Modal className="modal" show={props.isShowModal} onHide={props.handleShow}>
      <Form onSubmit={onHandleSubmit} noValidate>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={receipt.totalAmount}
            placeholder={`Company Name`}
            name="company"
            type="text"
            label={`Company Name`}
            onChange={(e) => onChange(e)}
          />
          <Input
            value={receipt.totalAmount}
            placeholder={`Address`}
            name="address"
            type="text"
            label={`Adress`}
            onChange={(e) => onChange(e)}
          />
          <Input
            value={receipt.totalAmount}
            placeholder={`Phone Number`}
            name="phone"
            type="text"
            label={`Phone Number`}
            onChange={(e) => onChange(e)}
          />
          {receipt.receiptItems.length > 0 ? receipt.receiptItems.map((item, index) => {
            return (
              <div key={index} className="receipt-product">
                <Form.Group>
                  <Form.Label>Product</Form.Label>
                  <Form.Control name="productid" required as="select" value={receipt.receiptItems[index].productid} onChange={(e) => onChange(e, index)}>
                    <option key={'empty'} value={''}>...</option>
                    {showListProduct(product.products)}
                  </Form.Control>
                </Form.Group>
                <Input
                  value={receipt.receiptItems[index].quantity}
                  placeholder={`quantity`}
                  name="quantity"
                  type="number"
                  label={`Quantity`}
                  onChange={(e) => onChange(e, index)}
                />
                <Input
                  value={receipt.receiptItems[index].pricereceipt}
                  placeholder={`Amount`}
                  name="pricereceipt"
                  type="number"
                  label={`Amount`}
                  onChange={(e) => onChange(e, index)}
                />
              </div>
            )
          }) : null}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {showAddProduct ? (
              <div className="receipt-product-add">
                <Form.Group>
                  <Form.Label>Product</Form.Label>
                  <Form.Control name="productid" required as="select" value={item.productid} onChange={(e) => onChangeProduct(e)}>
                    <option key={'empty'} value={''}>...</option>
                    {showListProduct(product.products)}
                  </Form.Control>
                </Form.Group>
                <Input
                  value={item.quantity}
                  placeholder={`quantity`}
                  name="quantity"
                  type="number"
                  label={`Quantity`}
                  onChange={(e) => onChangeProduct(e)}
                />
                <Input
                  value={item.pricereceipt}
                  placeholder={`Amount`}
                  name="pricereceipt"
                  type="number"
                  label={`Amount`}
                  onChange={(e) => onChangeProduct(e)}
                />
                <Button style={{ marginRight: 10 }} variant="outline-danger" onClick={() => {
                  setShowAddProduct(false)
                }}>
                  cancel
                </Button>
                <Button variant="outline-primary" onClick={() => {
                  receipt.receiptItems.push(item);
                  setItem({
                    productid: '',
                    quantity: null,
                    pricereceipt: null
                  });
                  setShowAddProduct(false)
                  setReceipt({ ...receipt });
                }}>
                  save product
                </Button>
              </div>
            ) : null}
            {showAddProduct ? null : <Button variant="dark" onClick={() => {
              setShowAddProduct(true)
            }}>
              add product
            </Button>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.handleShow}>
            Close
          </Button>
          <Button type="submit" className="btn-save">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )

}

export default ModalReceipt