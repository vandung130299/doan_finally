import React from 'react'
import './FlashSale.css'
import flash from './../../../access/gif/flash.gif'
import a32 from './../../../access/image/flashsale/a32.jpg'
// import galaxy20 from './../../../access/image/flashsale/galaxy20.jpg'
// import note10_5g from './../../../access/image/flashsale/note10_5g.jpg'
// import note10 from './../../../access/image/flashsale/note10.webp'
// import redmi10 from './../../../access/image/flashsale/redmi10.jpg'

/**
* @author
* @function FlashSale
**/

export const FlashSale = (props) => {
    return (
        <div className="flash-sale">
            <div className="grid wide flash-sale__wrap">
                <div className="row flash-sale__title">
                    <div className="col l-6 c-6">
                        <div className="title__left">
                            <strong>
                                Hot
                                <img src={flash} alt="flash" />
                                Sale
                            </strong>
                        </div>
                    </div>
                    <div className="col l-6 c-6">
                        <div className="title__right">
                            Kết thúc sau
                            <ul className="time">
                                <li className="day">01</li>:
                                <li className="hour">02</li>:
                                <li className="min">03</li>:
                                <li className="secon">04</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className=" flash-sale__content">
                    <div className=" carousel carousel-main"
                        data-flickity='{
                         "autoPlay":1000,
                            "wrapAround": true,
                            "percentPosition": true,
                            "pageDots": false}'
                    >
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>Redmi 10 5G</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>

                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                        <a href="/#" className="carousel-cell product__box">
                            <div className="product__image">
                                <img src={a32} alt="hinh" />
                                <div className="product__image-percent">
                                    <i className="icon-cps-percent">-50%</i>
                                </div>
                                <div className="product__image-sale">
                                    <i className="icon-cps-sale"></i>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__info-name">
                                    <h3>NameNew</h3>
                                </div>
                                <div className="product__info-price">
                                    <p className="special-price">
                                        1.234.567 ₫
                                    </p>
                                    <p className="old-price">
                                        1.234.567 ₫
                                    </p>
                                </div>
                                <div className="product__info-rating">
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <span className="rating_text">58 đánh giá</span>
                                </div>
                            </div>
                        </a>
                       
                       
                   
                    </div>

                </div>
            </div>
        </div>
    )

}