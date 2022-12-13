import React from 'react';
import { Link } from 'react-router-dom';
import { api_img } from '../constants/Config';
import { formatVnd } from '../utils/formatMoney';

function SearchList(props) {
    const { id, productname, price, imageurl } = props.product;
    return (
        <li className="header__search__item">
            <a href={`/dien-thoai/${id}`}>
                <div className="item__img">
                    <img src={imageurl} alt="" />
                </div>
                <div className="item__content">
                    <h4>{productname}</h4>
                    <span className="item__content--price">{formatVnd(price)}</span>
                </div>
            </a>
        </li>
    );
}

export default SearchList;