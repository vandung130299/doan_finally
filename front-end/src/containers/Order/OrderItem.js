import React, { useState } from 'react';
import { formatVnd } from '../../utils/formatMoney';
import { api_img } from '../../constants/Config';
import Item from './Item';
import OrderDetail from './OrderDetail';

function OrderItem(props) {
  const [showDetail, setShowDetail] = useState(false);
  const { _id, items, orderStatus, address, contactNumber } = props.order;

  const showItemList = (items) => {
    let output = [];
    if (items) {
      for (const key in items) {
        if (Object.hasOwnProperty.call(items, key)) {
          output.push(<Item
            key={items[key]._id}
            item={items[key]}
            orderStatus={orderStatus}
            address={address}
            contactNumber={contactNumber}
          />)
        }
      }
    }
    return output;
  }

  const totalMoney = (items) => {
    let output = 0;
    if (items) {
      for (const key in items) {
        if (Object.hasOwnProperty.call(items, key)) {
          output += items[key].payablePrice * items[key].purchasedQty;
        }
      }
    }
    return output;
  }

  return (
    <div className="">
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 15, paddingBottom: 0, fontSize: 16, fontWeight: '500' }}>
        <span>Mã đơn hàng: {_id}</span>
        <span>Tổng đơn hàng: {formatVnd(totalMoney(items))}</span>
      </div>

      {showItemList(items)}
      {/* <div className="cart__info">
        <div className="cart__img--containers">
          <img className="cart__img" src={`${api_img}${img}`} alt="" />
        </div>
        <div className="cart__name">{name}</div>
      </div> */}
      {/* <div className="cart__price">
        <span className="cart__price--old">{formatVnd(price)}</span>
        <span className="cart__price--current">{formatVnd(price - (price * offer / 100))}</span>
      </div>
      <div className="cart__amount">
        <span onClick={onUpdateCartDown} className="cart__amount--operator" id="minus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon "><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg></span>
        <span className="cart__amount--current">{qty}</span>
        <span onClick={onUpdateCartUp} className="cart__amount--operator" id="plus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></span>
      </div>
      <div className="cart__total primary-color">
        {formatVnd((price - (price * offer / 100)) * qty)}
      </div>
      <div className="cart__edit">
        <span onClick={onDeleteCart} className="cart__edit--remove">xóa</span>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
        <button onClick={() => setShowDetail(true)} className="btn-detail">Xem chi tiết</button>
      </div>
      {showDetail ? <OrderDetail setShowDetail={setShowDetail} order={props.order} /> : null}
    </div>
  );
}

export default OrderItem;