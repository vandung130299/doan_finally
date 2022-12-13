import React, { useEffect } from 'react';
import { api_img } from '../../constants/Config';
import { formatVnd } from '../../utils/formatMoney';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import axios from '../../utils/axios';
import { getOrders } from '../../actions';
import { toast } from 'react-toastify';

const orderStatusDetail = {
  pending: 'Chờ xác nhận:',
  packed: 'Thời gian đóng gói:',
  shipped: 'Thời gian lấy hàng:',
  delivered: 'Thời gian giao hàng:',
  cancel: 'Thời gian hủy:',
}

function OrderDetail(props) {
  const totalMoney = (products) => {
    let output = 0;
    if (products) {
      products.map(item => {
        output += item.payablePrice * item.purchasedQty;
      })
    }
    return output;
  }

  const dispatch = useDispatch();

  const cancelOrder = (_id) => {
    axios.post(`/order/cancelOrder`, { orderId: _id })
      .then(res => {
        if (res.status === 201) {
          toast.success('Hủy đơn hàng thành công!');
          dispatch(getOrders());
        } else {
          toast.success('Lỗi: ' + res.data.message);
        }
      });
  }
  return (
    <>
      <input type="checkbox" hidden id="login_check" defaultChecked={true} />
      <div className="modal modal_login">
        <label className="modal__overlay">
        </label>
        <div className="modal__body">
          <div className="modal__inner">
            <div className="auth-form login-form">
              <div className="auth-form_header">
                <h3 className="auth-form__heading">Chi tiết đơn hàng: <span style={{ fontSize: 17 }}>{props.id}</span></h3>
              </div>
              <div className="auth-form__form">
                {props.order.orderItems ? props.order.orderItems.map((item, index) => {
                  return (<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} className="auth-form__group">
                    <div className="cart__img--containers">
                      <img className="cart__img" src={item.imageurl} alt="" />
                    </div>
                    <div style={{ fontSize: 16 }}>
                      <div>{item.name}</div>
                      <div>Giá: {formatVnd(item.pricecurrent)}</div>
                      <div>Số lượng: {item.quantity}</div>
                    </div>
                  </div>)
                }) : null}
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: 35, fontSize: 16 }} className="auth-form__group">
                  <div>Số điện thoại: {props.order.phone}</div>
                  <div>Địa chỉ nhận hàng: {props.order.address}</div>
                  <div style={{ fontSize: 18, fontWeight: '500', paddingTop: 15 }}>Trạng thái đơn hàng:</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 200 }}>
                      <span>{orderStatusDetail[props.order.status]}</span>
                      <span>{moment(props.order.orderDate).format('DD-MM-YYY')}</span>
                    </div>
                  <div style={{ fontSize: 18, fontWeight: '500', paddingTop: 15 }}>Tổng số tiền: {formatVnd(parseInt(props.order.totalmoney))}</div>
                </div>
                <div className="auth-form__controls">
                  <button type="button" style={{ color: '#00483d', backgroundColor: 'white', borderColor: '#00483d', marginRight: 15 }} className="btn" onClick={() => props.setShowDetail(false)}>Thoát</button>
                  {props.order.status === 'pending' ? <button type="button" style={{ color: '#fff', backgroundColor: '#d70018', borderColor: '#d70018', marginRight: 15 }} className="btn" onClick={() => cancelOrder(props.order.id)}>Huỷ đơn hàng</button> : null}
                </div>
              </div>
              <div className="auth-form__socials">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default OrderDetail;