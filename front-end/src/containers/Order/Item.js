import React from 'react';
import { api_img } from '../../constants/Config';
import { formatVnd } from '../../utils/formatMoney';

function Item(props) {
  let { _id, payablePrice, productId, purchasedQty} = props.item;
  return (
    <div className="cart__item">
      <div className="cart__info">
        <div className="cart__img--containers">
          <img className="cart__img" src={`${api_img}${productId.productPictures[0].img}`} alt="" />
        </div>
        <div className="cart__name">{productId.name}</div>
      </div>
      <div className="cart__price">
        <span className="cart__price--current">{formatVnd(payablePrice)}</span>
      </div>
      <div className="cart__amount">
        Số lượng:
        {/* <span onClick={onUpdateCartDown} className="cart__amount--operator" id="minus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon "><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg></span> */}
        <span className="cart__amount--current">{purchasedQty}</span>
        {/* <span onClick={onUpdateCartUp} className="cart__amount--operator" id="plus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></span> */}
      </div>
      <div className="cart__total primary-color">
        {formatVnd(payablePrice * purchasedQty)}
      </div>
      {/* <div className="cart__edit">
        <button onClick={() => setShowDetail(true)} className="btn-detail">Xem chi tiết</button>
      </div> */}
    </div>
  );
}

export default Item;