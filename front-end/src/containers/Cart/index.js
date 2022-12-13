import React, { useEffect } from 'react';
import CartItem from './CartItem';
import NotFound from '../../components/NotFound';
import { formatVnd } from '../../utils/formatMoney';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../../actions';

function CartContainer(props) {

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  let showProductList = (carts) => {
    let output = [];
    if (carts && carts.length > 0) {
      carts.map((item, index) => {
  	    output.push(<CartItem
          key={index}
          cart={item}
        />)
      })
    }else{
      output = <NotFound width="100" content="Chưa có sản phẩm trong giỏ hàng"/>
    }
    return output;
  }

  let totalMoney = (carts) => {
    let output = 0;
    if (carts) {
      for (const key in carts) {
        if (Object.hasOwnProperty.call(carts, key)) {
          output += carts[key].quantity * carts[key].price;
        }
      }
    }
    return output;
  }
  return (
    <div className="cart">
      <div className="grid wide">
        <div className="cart__header">
          <div className="cart__info">
            Sản Phẩm
          </div>
          <div className="cart__price">
            Đơn Giá
          </div>
          <div className="cart__amount">
            Số Lượng
          </div>
          <div className="cart__total">
            Số Tiền
          </div>
          <div className="cart__edit">
            Tháo Tác
          </div>
        </div>
        <div className="cart__list">
          {showProductList(cart.cartItems)}
        </div>
        <div className="cart__footer">
          <div className="cart__total--products">
            <span>Tổng tiền:</span>
            <span className="cart__total--vnd">{formatVnd(totalMoney(cart.cartItems))}</span>
          </div>
          <div onClick={() => {
            dispatch(addOrder(cart.cartItems));
          }} className="btn buy-now">
            Đặt Hàng
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;