import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth.action';
import useViewport from '../../helpers/userViewport';
import { MaterialButton, MaterialInput, Modal } from '../MaterialUI';
import './Header.css'

/**
* @author
* @function Header
**/

export const Header = (props) => {

    const [loginModal, setLoginModal] = useState(false);
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");

    const viewPort = useViewport();
    const isMobile = viewPort.width <= 739;

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const userLogin = () => {
        // if (signup) {
        //     userSignup();
        // } else {
            console.log(usernameOrEmail, password )
            dispatch(login({ usernameOrEmail, password }));
        // }
    };

    if (isMobile) {
        return (
            <div className="header">
                <div className="banner-top">
                    <div className="banner-top_content">
                        <div className="plusingRed"> </div>
                        <em>
                            <a href="/" className="text-white">Giao hàng nhanh từ 1h (xem chi tiết)</a>
                        </em>
                    </div>
                </div>
                <div className="navbar">
                    <div className="grid" >
                        <div className="row" style={{ justifyContent: 'space-between', padding: "10px 0", margin: "0 10px" }}>
                            <div className="col">
                                <a href="/" className="navbar-logo__menu" >
                                    <i className="icon-cps-menu"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/" className="navbar-logo__cps" >
                                    <i className="icon-cps-max"></i>
                                </a>
                            </div>
                            <div className="col">
                                <div className="navbar-about__cart">
                                    <a href="/">
                                        <div className="navbar-about__icon">
                                            <i className="icon-cps-market"></i>
                                        </div>
                                        <div className="navbar-about__content">
                                            <p className="navbar-about__title hide-on-mobile">Giỏ hàng</p>
                                        </div>
                                    </a>
                                    <div className="item_in_cart">
                                        2
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ justifyContent: 'space-between', margin: "0 10px" }}>
                            <div className="col c-12">
                                <div className="navbar-search">
                                    <form className="search-form">
                                        <input type="text" className="form-control search-form__input" placeholder="Bạn cần tìm gì?" />
                                        <button className="search-form__btn">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    } else {
        return (
            <div className="header">
                {/* Login modal */}
                <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
                    <div className="authContainer">
                        <div className="">
                            <div className="leftspace more_1">
                                <p>Đăng Nhập</p>
                            </div>
                            <div className="rightspace">
                                <div className="loginInputContainer">
                                    <MaterialInput
                                        type="text"
                                        label="Username Or Email"
                                        value={usernameOrEmail}
                                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                                    />

                                    <MaterialInput
                                        type="password"
                                        label="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <MaterialButton
                                        title={"Login"}
                                        bgColor="#fb641b"
                                        textColor="#ffffff"
                                        style={{
                                            margin: "40px 25px 20px",
                                        }}
                                    onClick={userLogin}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* Login modal end */}

                <div className="banner-top">
                    <div className="banner-top_content">
                        <div className="plusingRed"> </div>
                        <em>
                            <a href="/" className="text-white">Giao hàng nhanh từ 1h (xem chi tiết)</a>
                        </em>
                    </div>
                </div>
                <div className="navbar">
                    <div className="navbar-container">
                        <div className="navbar-logo ">
                            <a href="/" className="navbar-logo__menu" >
                                <i className="icon-cps-menu"></i>
                            </a>
                            <Link to="/" className="navbar-logo__cps" >
                                <i className="icon-cps-max"></i>

                            </Link>
                        </div>
                        <div className="dropdown-local hide-on-mobile">
                            <a href="/" >
                                <p>Xem giá, tồn kho tại:</p>
                                <p className="init-local">
                                    Hồ Chí Minh
                                    <span className="pl-12" style={{ opacity: 0.8, fontWeight: 300 }}>
                                        <i className="fas fa-angle-down"></i>
                                    </span>
                                </p>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="active"><a href="/"><i className="fas fa-map-marker-alt"></i> Hồ Chí Minh</a></li>
                                <li className=""><a href="/"><i className="fas fa-map-marker-alt"></i> Hà Nội</a></li>
                                <li className=""><a href="/"><i className="fas fa-map-marker-alt"></i> Bình Dương </a></li>
                                <li className=""><a href="/"><i className="fas fa-map-marker-alt"></i> Hải Dương </a></li>
                                <li className=""><a href="/"><i className="fas fa-map-marker-alt"></i> Hải Phòng </a></li>

                            </ul>
                        </div>
                        <div className="navbar-search hide-on-mobile">
                            <form className="search-form">
                                <input type="text" className="form-control search-form__input" placeholder="Bạn cần tìm gì?" />
                                <button className="search-form__btn">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="navbar-about">
                            <div className="navbar-about__contact hide-on-mobile">
                                <a href="/">
                                    <div className="navbar-about__icon">
                                        <i className="icon-cps-phone"></i>
                                    </div>
                                    <div className="navbar-about__content">
                                        <p className="navbar-about__title">Gọi mua hàng: </p>
                                        <p className="navbar-about__sub">1800.2097</p>
                                    </div>
                                </a>
                            </div>
                            <div className="navbar-about__findLocal hide-on-mobile">
                                <Link to="/order">
                                    <div className="navbar-about__icon">
                                        <i className="icon-cps-local"></i>
                                    </div>
                                    <div className="navbar-about__content">
                                        <p className="navbar-about__title">Tìm cửa hàng</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="navbar-about__cart">
                                <Link to="/cart"
                                
                                >
                                    <div className="navbar-about__icon">
                                        <i className="icon-cps-market"></i>
                                    </div>
                                    <div className="navbar-about__content">
                                        <p className="navbar-about__title hide-on-mobile">Giỏ hàng</p>
                                    </div>
                                </Link>
                                <div className="item_in_cart">
                                    0
                                </div>
                            </div>
                            <div className="navbar-about__member"
                               
                            >
                                {!auth.authenticate 
                                ? 
                                <a href="/"
                                 onClick={(e) => {
                                     e.preventDefault();
                                    setLoginModal(true);
                                }}
                                >
                                    <div className="navbar-about__icon">
                                        <i class="far fa-user" style={{ fontSize: '15px' }}></i>
                                    </div>
                                    <div className="navbar-about__content">
                                        <p className="navbar-about__title hide-on-mobile">Đăng Nhập</p>
                                    </div>
                                </a>
                                :
                                <a href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                               }}
                                >
                                    <div className="navbar-about__icon">
                                        <i class="far fa-user" style={{ fontSize: '15px' }}></i>
                                    </div>
                                    <div className="navbar-about__content">
                                        <p className="navbar-about__title hide-on-mobile">{auth.user.name}</p>
                                    </div>
                                </a>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}