import './../css/header.css';
import './../css/grid.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './../components/SearchItem';
import { getCartItems, signOut, emptyCartItems } from './../actions';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import axios from "../utils/axios";
function HeaderContainer(props) {

    const [search, setSearch] = useState('');
    const [productList, setProductList] = useState([]);
    const [isSwitchForm, setIsSwitchForm] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);
    useEffect(() => {
        console.error(auth.authenticate)
        if (auth.authenticate) {
            dispatch(getCartItems());
        } else {
            dispatch(emptyCartItems());
        }
    }, [auth.authenticate])
    let onChange = (event) => {
        var target = event.target;
        var value = target.value;
        setSearch(value);
        if (value) {
            axios.get(`/product/list?search=${value}`)
                .then(res => {
                    setProductList(res.data.products);
                    console.error('res serach product: ', res.data)
                })
        } else {
            setProductList([]);
        }
    }
    let onClickSearch = () => {
        if (search) {
            axios.get(`/product/list?search=${search}`)
                .then(res => {
                    console.error('res serach product: ', res.data)
                })
        }
    }
    const totalCarts = (carts) => {
        let output = 0;
        if (carts) {
            for (const key in carts) {
                output += parseInt(carts[key].qty);
            }
        }
        return output;
    }
    let ShowInfoUser = (auth) => {
        if (auth.authenticate) {
            return (<li className="header__navbar-item header__navbar-user">
                <img className="header__navbar-user-img" src="https://graph.facebook.com/2725237291051373/picture?width=400&height=400" alt="" />
                <span className="header_-navbar-user-name">{auth.user.firstName + auth.user.lastName}</span>
                <ul className="header__navbar-user-list">
                    <li className="header__navbar-user-item">
                        <Link to="info-editing" className="header__navbar-user-link" href="">Tài khoản của tôi</Link>
                    </li>
                    <li className="header__navbar-user-item">
                        <Link to="/order" className="header__navbar-user-link" href="">Đơn mua</Link>
                    </li>
                    <li className="header__navbar-user-item">
                        <a className="header__navbar-user-link" onClick={() => setIsForgotPassword(true)}>Đổi mật khẩu</a>
                    </li>
                    <li className="header__navbar-user-item">
                        <a className="header__navbar-user-link" onClick={() => {
                            dispatch(signOut());
                        }}>Đăng xuất</a>
                    </li>
                </ul>
            </li>)
        } else {
            return (
                <React.Fragment>
                    <input type="checkbox" hidden id="login_check" defaultChecked={true} />
                    <input type="checkbox" hidden id="register_check" defaultChecked={true} />
                    <div className={isSwitchForm ? "modal modal_login" : "modal modal_register"}>
                        <label className="modal__overlay">
                        </label>
                        {isSwitchForm
                            ? <SignIn
                                setIsSwitchForm={setIsSwitchForm} />
                            : <SignUp
                                setIsSwitchForm={setIsSwitchForm} />}
                    </div>
                </React.Fragment>
            )
        }
    }

    const showProductSearch = (productList) => {
        let rs = null;
        if (productList && productList.length > 0){
            rs=productList.map((product, index)=>{
                return <SearchItem key={index} product={product}/>
            })
        }
        return rs;
    }

    return (
        <header>
            <div className="header__top">
                <div className="container">
                    <ul className="menu-list">
                        <li className="mb-0"><a>Số 97 Man Thiện Quận 9 Thành Phó Hồ Chí Minh</a></li>
                        {ShowInfoUser(auth)}
                    </ul>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__logo mb-0">
                        <a href="/">
                            <img src="https://www.thephoneshopmidlands.com/uploads/u6EFvIyP/737x0_1094x0/The-Phone-Shop-Midlands-logo-v4.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__search">
                        <input type="text" name="txtSearch" onChange={onChange} placeholder="Hôm nay bạn cần tìm gì?" />
                        <a href={`/search?search=${search}`} className="header__search--icon" htmlFor="checkbox-search">
                            <i className="fas fa-search"></i>
                        </a>
                        {productList.length > 0 ? (<ul className="header__search__list">
                            {showProductSearch(productList)}
                        </ul>) : null}
                    </div>
                    <div className="header__contact mb-0">
                        <span className="">Liên hệ trực tiếp</span>
                        <span><i className="fas fa-phone"></i>  0944748742</span>
                    </div>
                    <div className="header__cart mb-0">
                        <Link to="/cart">
                            <i className="header__cart-icon fas fa-shopping-cart"></i>
                        </Link>
                        <span className="header__cart--quanlity">{totalCarts(cart.cartItems)}</span>
                    </div>
                </div>
            </div>
            {isForgotPassword ? (
                <>
                    <input type="checkbox" hidden id="login_check" defaultChecked={true} />
                    <div className="modal modal_login">
                        <label className="modal__overlay">
                        </label>
                        <ForgotPasswordContainer
                            setIsForgotPassword={setIsForgotPassword} />
                    </div>
                </>
            ) : null}
        </header>
    );
}

export default HeaderContainer;