import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import axiosInstance from "../../../helpers/axios"
import './CartItem.scss';

/**
* @author
* @function CartItem
**/

const CartItem = (props) => {
    // const product = useSelector(state => state.product)

    let maxqty;
    useEffect(() => {
        axiosInstance.get(`/product/${productid}`)
            .then((response) => {
                maxqty = response.data.total - response.data.sold;
                console.log('maxqty', maxqty);
                if(maxqty==0){
                    props.onRemoveCartItem(productid)
                }
            })
    });

    const [quantity, setQuantity] = useState(props.cartItem.quantity);
    const {
        productid, productname, price, imageurl
    } = props.cartItem;


    const onQuantityIncrement = () => {
       
        if (quantity >= maxqty) {
            alert('Số lượng tối đa')
            return;
        }
        setQuantity(quantity + 1);
        props.onQuantityInc(props.cartItem, quantity + 1);
    }

    const onQuantityDecrement = () => {
        if (quantity <= 1) {
            alert('Số lượng tối thiểu')
            return;
        }
        setQuantity(quantity - 1);
        props.onQuantityDec(props.cartItem, quantity - 1);
    }

    return (
        <div className="cartItemContainer">
            <div className="flexRow">

                <div className="cartProImgContainer">
                    <img src={imageurl} alt={''} />
                </div>
                <div className="cartItemDetails">
                    <div className="cartItemInfo">
                        <p className="cartItem-name">{productname}</p>
                        <p className="cartItem-price">Giá: {price} VNĐ</p>
                    </div>

                    <div className="quantityControl">
                        <button className="button-5" role="button"
                            onClick={onQuantityDecrement}
                        >-</button>
                        <input className="inp" value={quantity} readOnly />
                        <button class="button-5" role="button"
                            onClick={onQuantityIncrement}
                        >+</button>
                    </div>

                </div>
                <button className="button-5 btn-delete" role="button"
                 onClick={() => props.onRemoveCartItem(productid)}
                >Xóa Sản Phẩm</button>
                <div className="totalPrice">
                    <p className="totalPrice__name">Giá tiền</p>
                    <p className="totalPrice__price">{price * quantity} VNĐ</p>

                </div>
            </div>

        </div>
    )

}

export default CartItem