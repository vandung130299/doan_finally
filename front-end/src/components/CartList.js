import React from 'react';
import {formatVnd} from './../utils/formatMoney';
function CartList(props) {
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
					{props.children}
                </div>
                <div className="cart__footer">
                    <div className="cart__total--products">
                        <span>Tổng tiền:</span>
                        <span className="cart__total--vnd">{formatVnd(props.total)}</span>
                    </div>
                    <div className="btn buy-now">
                        Đặt Hàng
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;