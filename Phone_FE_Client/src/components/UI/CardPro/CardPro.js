import React from 'react'
import { Link } from 'react-router-dom';
import './CardPro.scss'

/**
* @author
* @function CardPro
**/

export const CardPro = (props) => {
    const onClick = () => {
        props.onClick && props.onClick();
    };
    return (
        <div className="card__pro" >
            <div className="box__image">
                <Link to={props.myroute}  >
                    <img src={props.image} alt="ss" />
                </Link>
            </div>
            <div className="box__percent">
                <p>{props.percent}</p>
            </div>
            <div className="box__name">
                <Link to={props.myroute} style={{ color: 'black' }} >
                    <h3>
                        {props.name}
                    </h3>
                </Link>
            </div>
            <div className="box__info">
                <p> {props.monitor}</p>
                <p>{props.ram}</p>
                <p>{props.pin}</p>
            </div>
            {props.stock ?
                <div className="box__info stock">
                    <p>
                        {props.stock}
                    </p>
                </div>
                :
                <div className="box__info stock">
                    <p>
                        Sắp về Hàng
                    </p>
                </div>
            }
            <div className="box__price">
                <p className="special__price">
                    {props.special__price} ₫
                </p>
                <p className="old__price">
                    {props.old__price} ₫
                </p>
            </div>
            <div className="box__promotion">
                <p>
                    {props.promotion}
                </p>
            </div>
            <div className="box__rating">
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <span className="rating_text">{props.rating} đánh giá</span>
            </div>

        </div>
    )

}