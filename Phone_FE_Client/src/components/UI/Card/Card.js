import React from 'react'
import './Card.css'

/**
* @author
* @function Card
**/

export const Card = (props) => {
    return (
        <div className="card" >
            <div className="card__image">
                <a href={props.href}>
                    <img src={props.image} alt={props.altImage} />
                </a>
                {props.percent ?
                    <div className="card__image-percent">
                        <i className="icon-cps-percent">-50%</i>
                    </div>
                    : null
                }
                {props.sale ?
                    <div className="card__image-sale">
                        <i className="icon-cps-sale"></i>
                    </div>
                    : null
                }
            </div>
            <div className="card__info">
                <a href={props.href}>
                    <div className="card__info-name">
                        <h3>{props.name}</h3>
                    </div>
                </a>
                <div className="card__info-price">
                    <p className="special-price">
                        {props.specialPrice}
                    </p>
                    <p className="old-price">
                        {props.oldPrice}
                    </p>
                </div>
                {props.promotion ?
                    <div className="card__info-promotion">
                        <p className="special-promotion">
                            {props.promotion}
                        </p>
                    </div>
                    : null
                }

                <div className="card__info-rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <span className="rating_text">{props.rating} đánh giá</span>
                </div>
            </div>
            <div className="card__btn">
                <div className="card__btn-buy">Mua Ngay</div>
                <div className="card__btn-compare">So Sánh</div>
            </div>
        </div>
    )

}