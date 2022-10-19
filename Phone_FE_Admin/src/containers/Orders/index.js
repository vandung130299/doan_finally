import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../urlConfig";
import { updateOrder } from "../../actions";
import Layout from "../../components/Layout";

import "./style.css";
import ModalProduct from "./modal";
import { OrderExportPDFData } from "./OrderExportPDFData";


const formatCash = (cash) => cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// var x = 5200000;

// const testCash = (cash) => {
//   cash = cash.toLocaleString('vi', { style: 'currency', currency: 'VND' });
// }


const Orders = (props) => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [orderItem, setorderItem] = useState(null);

  const showOrderDetails = (orderItems) => {
    setorderItem(orderItems);
  }
  const closeModal=() => {
    setorderItem(null);
  }
  const renderOrderDetails = () => {
    if(orderItem) {
      return <ModalProduct orderItem={orderItem} closeModal={closeModal}/>
    }
    return null;
  }
  return (
    <Layout sidebar>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <h4>Order Management</h4>
      </div>
      <Table bordered hover size="sm" variant="">
        <thead>
          <tr>
            <th>#</th>
            <th>Receiver</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Code</th>
            <th>Paid</th>
            <th>Status</th>
            <th></th>
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
              <td>
                <Button
                  variant="light"
                  // onClick={(e) => { toggleClass(e) }}
                  onClick={(e) => { showOrderDetails(orderItem) }}
                  data-toggle="tooltip" data-placement="top" title="View detail order"
                >
                  <i className="fa-solid fa-eye"></i>
                </Button>
                <Button
                  variant="danger"
                  className="ml-2"
                  data-toggle="tooltip" data-placement="top" title="Cancel order"
                  // onClick={(e) => { toggleClass(e) }}
                >
                  <i className="fa-solid fa-ban"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      { orderItem ? renderOrderDetails() : null }
    </Layout>
  )
};

export default Orders;