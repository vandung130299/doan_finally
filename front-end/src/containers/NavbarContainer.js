import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategory, getAllBrand } from '../actions';

function NavbarContainer(props) {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const brand = useSelector(state => state.brand);

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, [])

    const showMenuBrands = (myBrands, categoryID) => {
        let output = null;
        if (myBrands && myBrands.length > 0) {
            output = myBrands.map((brand, index) => {
                return (<li key={index}>
                    <a style={{color:'black'}} href={`/?category=${categoryID}&brand=${brand.id}`}>{brand.brandname}</a>
                </li>);
            })
        }
        return output;
    }
    const showNavbar = (categories, brands) => {
        let output = null;
        output = categories.map((category, index) => {
            return (<li key={index}>
                <a href={`/?category=${category.id}`}>
                    <i className={category.icon}></i>
                    <span className="mb-0">{category.categoryname}</span>
                </a>
                <div className="catalog">
                    <h4>HÃNG SẢN XUẤT</h4>
                    <ul className="list__product">
                        {showMenuBrands(brands, category.id)}
                    </ul>
                </div>
            </li>)
        });
        return output;
    }
    return (
        <ul className="shop__nav__menu">
            {showNavbar(category.categories, brand.brands)}
            {/* <li>
                <a href="">
                    <i className="fas fa-mobile-alt"></i>
                    <span className="mb-0">ĐIỆN THOẠI</span>
                </a>
                <div className="catalog">
                    <h4>HÃNG SẢN XUẤT</h4>
                    <ul className="list__product">
                        {props.children}
                    </ul>
                </div>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-tablet-alt"></i>
                    <span className="mb-0">TABLET</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-headphones-alt"></i>
                    <span className="mb-0">LOA - TAI NGHE</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-charging-station"></i>
                    <span className="mb-0">PHỤ KIỆN</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-sim-card"></i>
                    <span className="mb-0">SIM THẺ</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="far fa-newspaper"></i>
                    <span className="mb-0">TIN TỨC</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-ad"></i>
                    <span className="mb-0">KHUYẾN MÃI</span>
                </a>
            </li> */}
        </ul>
    );
}

export default NavbarContainer;