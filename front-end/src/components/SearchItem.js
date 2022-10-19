import React from 'react';
import { Link } from 'react-router-dom';
import { api_img } from '../constants/Config';
import { formatVnd } from '../utils/formatMoney';

function SearchList(props) {
    const { _id, name, price, offer, productPictures } = props.product;
    return (
        <li className="header__search__item">
            <a href={`/dien-thoai/${_id}`}>
                <div className="item__img">
                    <img src={`${api_img}${productPictures.length > 0 ? productPictures[0].img : ''}`} alt="" />
                </div>
                <div className="item__content">
                    <h4>{name}</h4>
                    <span className="item__content--price">{formatVnd(price - (price * offer / 100))}</span>
                </div>
            </a>
        </li>
    );
}

export default SearchList;