import React from 'react';
import { useDispatch } from 'react-redux';
import { formatVnd } from '../../utils/formatMoney';
import { api_img } from '../../constants/Config';
import { addToCart, removeCartItem } from '../../actions';

function CartItem(props) {
  const dispatch = useDispatch();
  let { productid, productname, price, imageurl, quantity, productQuantity } = props.cart;
  console.log(props);
  let onUpdateCartUp = () => {
    if (quantity < productQuantity) {
      dispatch(addToCart({ id: productid, productname, price, imageurl, quantity }, 1));
    }
  }
  let onUpdateCartDown = () => {
    if(quantity === 1){
      dispatch(removeCartItem(productid));
    } else {
      dispatch(addToCart({ id: productid, productname, price, imageurl, quantity }, -1));
    }
  }
  let onDeleteCart = () => {
    dispatch(removeCartItem(productid));
  }
  return (
    <div className="cart__item">
      <div className="cart__info">
        <div className="cart__img--containers">
          <img className="cart__img" src={imageurl} alt="" />
        </div>
        <div className="cart__name">{productname}</div>
      </div>
      <div className="cart__price">
        <span className="cart__price--current">{formatVnd(price)}</span>
        {/* <span className="cart__price--current">{formatVnd(price)}</span> */}
      </div>
      <div className="cart__amount">
        <span onClick={onUpdateCartDown} className="cart__amount--operator" id="minus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon "><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg></span>
        <span className="cart__amount--current">{quantity}</span>
        <span onClick={onUpdateCartUp} className="cart__amount--operator" id="plus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></span>
      </div>
      <div className="cart__total primary-color">
        {formatVnd(price * quantity)}
      </div>
      <div className="cart__edit">
        <span onClick={onDeleteCart} className="cart__edit--remove">xóa</span>
      </div>
    </div>
  );
}

export default CartItem;