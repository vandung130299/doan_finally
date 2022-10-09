import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, checkOut, getCartItems, removeCartItem } from '../../actions/cart.action';
import { Layout } from '../Layout/Layout'
import { MaterialButton, MaterialInput, Modal } from '../MaterialUI';
import CartItem from './CartItem/CartItem';
import './CartPage.scss'
/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {
    const cart = useSelector(state => state.cart);
    //const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const [loginModal, setLoginModal] = useState(false);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [fullname, setFullname] = useState("");
    const [note, setNote] = useState("");

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)



    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
        }
        console.log('getcaeeeee')
    }, [auth.authenticate]);


    const onQuantityIncrement = (item, qty) => {
        const id = item.productid;
        const { productname, price, imageurl } = item;
        dispatch(addToCart({ id, productname, price, imageurl }, 1));
    }

    const onQuantityDecrement = (item, qty) => {
        const id = item.productid;
        const { productname, price, imageurl } = item;
        dispatch(addToCart({ id, productname, price, imageurl }, -1));
    }

    const onRemoveCartItem = (productid) => {
        dispatch(removeCartItem(productid));
    };

    const onCheckOut = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var orderDate = date+' '+time;
        // const orderDate = "2021-11-21 13:02";
        const payload = {
            address,
            phone,
            fullname,
            note,
            orderDate
        }
        dispatch(checkOut(payload));
        setLoginModal(false);
    }


    if (cart.cartItems.length === 0) {
        return (

            <Layout>
                <div className="test">

                </div>
                <div className="cart-page">
                    <div className="grid wide">
                        <div className="row sm-gutter">
                            <div className="col l-12 m-6 c-12">
                                <div className="module">
                                    <div className="left">
                                        <Link to={`/product`} > <i className="fa fa-chevron-left"></i> Tiếp tục tìm kiếm sản phẩm</Link>
                                    </div>
                                    <div className="right">
                                        <h1>Giỏ hàng của bạn trống</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
    return (
        <Layout>

            <div className="test">
            </div>
            <div className="cart-page">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col l-12 m-6 c-12">
                            <div className="module">
                                <div className="left">
                                    <Link to={`/product`} > <i className="fa fa-chevron-left"></i> Tiếp tục tìm kiếm sản phẩm</Link>
                                </div>
                                <div className="right">
                                    <h1>Giỏ hàng của bạn</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row sm-gutter">
                        <div className="col l-12 m-6 c-12">
                            {cart.cartItems.map((item, index) =>

                                <>
                                    <CartItem
                                        key={index}
                                        cartItem={item}
                                        onQuantityInc={onQuantityIncrement}
                                        onQuantityDec={onQuantityDecrement}
                                        onRemoveCartItem={onRemoveCartItem}
                                    />
                                </>
                            )}
                            <div className="totalPriceCart">
                                <h2 className="total_title">
                                    Tổng tiền phải thanh toán:
                                </h2>
                                <h2 className="total_price">
                                    {cart.cartItems.reduce((temp, item) =>
                                        temp + item.price * item.quantity, 0
                                    )}
                                    <span style={{ marginLeft: '5px', }}>VNĐ</span>
                                </h2>

                            </div>
                            <div className="totalPriceCart">
                                <button className="box-button box-button-buy"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLoginModal(true);
                                    }}
                                >Thanh Toán</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            {/* Login modal */}
            <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
                <div className="authContainer">
                    <div className="">
                        <div className="leftspace more_1">
                            <p>Thông Tin Thanh Toán</p>
                        </div>
                        <div className="rightspace">
                            <div className="loginInputContainer">
                                <MaterialInput
                                    type="text"
                                    label="Địa Chỉ"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                <MaterialInput
                                    type="text"
                                    label="Tên Người Nhận"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                />

                                <MaterialInput
                                    type="text"
                                    label="Số Điện thoại"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />



                                <MaterialInput
                                    type="text"
                                    label="Ghi chú"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />

                                {/* <MaterialInput
                                    type="text"
                                    label="Ngày đặt hàng"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                /> */}

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: "center",
                                    }}
                                >
                                    <input type="radio" name="paymentOption" value="cod"
                                        style={{

                                            margin: "10px",
                                        }} />
                                    <div>Thanh toán khi giao hàng</div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: "center",
                                    }}
                                >
                                    <input type="radio" name="paymentOption" value="cod"
                                        style={{

                                            margin: "10px",
                                        }}
                                    />
                                    <div>Thanh toán qua thẻ</div>
                                </div>
                                <MaterialButton
                                    title={`Thanh toán ${cart.cartItems.reduce((temp, item) =>
                                        temp + item.price * item.quantity, 0
                                    )}  VNĐ`}
                                    bgColor="#fb641b"
                                    textColor="#ffffff"
                                    style={{
                                        margin: "20px 25px 20px",
                                    }}
                                    onClick={onCheckOut}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* Login modal end */}
        </Layout>
    )

}