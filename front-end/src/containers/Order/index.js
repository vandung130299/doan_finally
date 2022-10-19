import React, { useEffect, useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import OrderItem from './OrderItem';
import NotFound from '../../components/NotFound';

function Order(props) {
  const [orderStatus, setOrderStatus] = useState('ordered');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, [])

  let showOrderList = (orders) => {
    let output = [];
    if (orders) {
      for (const key in orders) {
        if (Object.hasOwnProperty.call(orders, key)) {
          for (let index = 4; index >= 0; index--) {
            // const element = array[index];
            if (orders[key].orderStatus[index].isCompleted && orders[key].orderStatus[index].type == orderStatus) {
              output.push(<OrderItem
                key={orders[key]._id}
                order={orders[key]}
              />)
            }
            if (orders[key].orderStatus[index].isCompleted) {
              break;
            }
          }
        }
      }
    }
    if(output.length===0){
      output=<NotFound width="210" content="Chưa có đơn hàng nào"/>
    }
    return output;
  }

  return (
    <div className="order">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <ul className="sidebar">
            <li onClick={() => setOrderStatus("ordered")} className={orderStatus === "ordered" ? 'active' : null}>Chờ xác nhận</li>
            <li onClick={() => setOrderStatus("packed")} className={orderStatus === "packed" ? 'active' : null}>Chờ lấy hàng</li>
            <li onClick={() => setOrderStatus("shipped")} className={orderStatus === "shipped" ? 'active' : null} >Đang giao</li>
            <li onClick={() => setOrderStatus("delivered")} className={orderStatus === "delivered" ? 'active' : null} >Đã giao</li>
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