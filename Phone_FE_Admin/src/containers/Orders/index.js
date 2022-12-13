import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import "./style.css";
import ModalProduct from "./modal";
import { formatCash } from "../../asset/format";
import { getAllOrder } from "../../actions";
import axiosInstance from "../../helpers/axios";

const Orders = (props) => {
  const optionsOrderStatus = ['pending', 'confirm', 'delivery', 'cancel'];
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [orderItem, setorderItem] = useState(null);
  useEffect(() => {
    dispatch(getAllOrder());
  }, [])
  const showOrderDetails = (orderItems) => {
    setorderItem(orderItems);
  }
  const closeModal = () => {
    setorderItem(null);
  }
  const renderOrderDetails = () => {
    if (orderItem) {
      return <ModalProduct orderItem={orderItem} closeModal={closeModal} />
    }
    return null;
  }
  const handleCancel = (_id) => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const deliveryDate = date + ' ' + time;
    const payload = {
      status: optionsOrderStatus[3],
      deliveryDate
    };
    axiosInstance.post(`/order/${_id}`, payload).then(res => {
      console.log(res);
    })
  }
  return (
    <Layout sidebar>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
        <h4>Order Management</h4>
      </div>
      <Table style={{ fontSize: '12px' }} responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Receiver</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Code</th>
            <th>Paid</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {order.orders.map((orderItem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{orderItem.fullname}</td>
              <td style={{ maxWidth: '400px' }}>{orderItem.address}</td>
              <td>{orderItem.phone}</td>
              <td>{orderItem.id}</td>
              <td>{formatCash(orderItem.totalmoney)} ₫</td>
              <td>{orderItem.status}</td>
              <td style={{ width: '5%', textAlign: 'center' }}>
                <DropdownButton align="end" title="" variant="light">
                  <Dropdown.Item onClick={(e) => { showOrderDetails(orderItem) }}><i className="fa-solid fa-pen-to-square"></i><span style={{ paddingLeft: '10px' }}>Update</span></Dropdown.Item>
                  {orderItem.status === optionsOrderStatus[0] ? <Dropdown.Item onClick={(e) => handleCancel(orderItem.id)}><i className="fa-solid fa-ban"></i><span style={{ paddingLeft: '10px' }}>Cancel</span></Dropdown.Item> : null}
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {orderItem ? renderOrderDetails() : null}
    </Layout >
  )
};

export default Orders;