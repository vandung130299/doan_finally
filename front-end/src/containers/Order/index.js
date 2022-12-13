import React, { useEffect, useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import OrderItem from './OrderItem';
import NotFound from '../../components/NotFound';

function Order(props) {
  const [orderStatus, setOrderStatus] = useState('pending');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const optionsOrderStatus = ['pending', 'confirm', 'delivery', 'cancel'];
  useEffect(() => {
    dispatch(getOrders());
  }, [])

  let showOrderList = (orders) => {
    let output = [];
    if (orders) {
      orders.map((order, index) => {
        if (order.status === orderStatus) {
          output.push(<OrderItem key={index} order={order} />);
        }
      });
    }
    if (output.length === 0) {
      output = <NotFound width="210" content="Chưa có đơn hàng nào" />
    }
    return output;
  }

  return (
    <div className="order">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <ul className="sidebar">
            <li onClick={() => setOrderStatus("pending")} className={orderStatus === "pending" ? 'active' : null}>Chờ xác nhận</li>
            <li onClick={() => setOrderStatus("confirm")} className={orderStatus === "confirm" ? 'active' : null}>Đang chờ giao hàng</li>
            <li onClick={() => setOrderStatus("delivery")} className={orderStatus === "delivery" ? 'active' : null} >Đã giao</li>
            <li onClick={() => setOrderStatus("cancel")} className={orderStatus === "cancel" ? 'active' : null}>Đã hủy</li>
          </ul>
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          {showOrderList(user.orders)}
        </div>
      </div>
    </div>
  );
}

export default Order;