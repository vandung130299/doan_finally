import React, { useEffect } from 'react'
import './ProductDetails.scss'
import { Layout } from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import { getProductDetailsById } from '../../actions/product.action';
import { addToCart } from '../../actions/cart.action';
/**
* @author
* @function ProductDetails
**/

export const ProductDetails = (props) => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);

    const history = useHistory();

    useEffect(() => {
        const { productId } = props.match.params;
        console.log(props);
        const payload = {
            params: {
                productId,
            },
        };
        dispatch(getProductDetailsById(payload));
    }, []);

    const handleClick =() => {
        history.push("/product");
    }

    const handleClickBuy =()=>{
        
    }

    // if (Object.keys(product.productDetails).length === 0) {
    //     return (

    //         // <Layout>
    //         //     <div className="test">

    //         //     </div>
    //         //     <div className="productDetails">
    //         //         <div className="grid wide">
    //         //             <div className="row sm-gutter">
    //         //                 <div className="col l-12 m-6 c-12">
    //         //                     <div className="module">
    //         //                         <div className="left">
    //         //                             <Link to={`/product`} > <i className="fa fa-chevron-left"></i> Tiếp tục tìm kiếm sản phẩm</Link>
    //         //                         </div>
    //         //                         <div className="right">
    //         //                             <h1>Giỏ hàng của bạn</h1>
    //         //                         </div>

    //         //                     </div>
    //         //                 </div>
    //         //             </div>
    //         //         </div>

    //         //     </div>
    //         // </Layout>
    //         null
    //     );
    // }

    return (
        <Layout>
            <div className="test">
        
            </div>
            <div className="productDetails">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col l-12 m-12 c-12">
                            <div className="detail-product__box-name">
                                <div className="wrap__box-name">
                                    <div className="box-name__name">
                                        <h1>
                                        {product.productDetails.productname}
                                        </h1>
                                    </div>
                                    <div className="box-name__raiting">
                                        <i className="fas fa-star checked"></i>
                                        <i className="fas fa-star checked"></i>
                                        <i className="fas fa-star checked"></i>
                                        <i className="fas fa-star checked"></i>
                                        <i className="fas fa-star checked"></i>
                                        999 đánh giá
                                    </div>

                                </div>
                            </div>
                            <div className="detail-product__box-content ">
                                <div className="row sm-gutter">
                                    <div className="box-content__left col l-4 m-6 c-12">
                                        <div className="box-image">
                                            <img src={product.productDetails.imageurl} alt="product" />
                                        </div>
                                    </div>
                                    <div className="box-content__center col l-4 m-6 c-12">
                                        <div className="box-installment">
                                            <p className="tag-installment">Trả góp 0%</p>
                                        </div>
                                        <div className="box-price">
                                        {product.productDetails.price}
                                        </div>
                                        <div className="box-info">
                                            <div className="box-info__title">
                                                Thông Tin Máy
                                            </div>
                                            <div className="box-info__content">
                                                <ul>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Màn hình: </span> {product.productDetails.monitor}
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Hệ điều hành: </span> {product.productDetails.system}
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Chip Cpu: </span> {product.productDetails.cpu}
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Ram: </span> {product.productDetails.ram}
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Pin: </span> {product.productDetails.pin}
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Thiết kế: </span> {product.productDetails.thietKe}
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-plus"></i>
                                                        <span>Thông tin thêm: </span> {product.productDetails.infomation}
                                                    </li>
                                                    <li className="item-promotion">
                                                        
                                                        <span style={{color: 'rgb(87, 87, 160)'}}>
                                                            Số lượng còn lại: </span>  {product.productDetails.total-product.productDetails.sold}
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-content__right col l-4 m-6 c-12">
                                        <div className="box-promotion-more">
                                            <div className="box-title">
                                                <p className="box-title__title">Ưu đãi thêm</p>
                                            </div>
                                            <div className="box-content">
                                                <ul>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-check-circle"></i>
                                                        Giảm thêm tới 1% cho thành viên member</li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-check-circle"></i>
                                                        Giảm 5% tối đa 500k khi thanh toán bằng ví Moca trên ứng dụng Grab (áp dụng đơn hàng từ 500k)
                                                    </li>
                                                    <li className="item-promotion">
                                                        <i class="fas fa-check-circle"></i>
                                                        Giảm 500.000đ khi thanh toán hoặc trả góp từ 5 triệu trở lên bằng thẻ tín dụng FE Credit
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box-button box-button-buy"
                                            onClick={() => { 
                                                const { id, productname, price,imageurl } = product.productDetails;
                                                if(product.productDetails.sold>=product.productDetails.total){
                                                    alert('Hết Hàng')
                                                    return;
                                                }
                                                dispatch(addToCart({ id, productname, price, imageurl }));
                                                // Nhay link den /cart
                                                props.history.push(`/cart`);
                                                console.log( "props.history", props.history)
                                            }}
                                        >
                                            <strong>Thêm vào giỏ hàng</strong>
                                            <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
                                        </div>
                                        <div className="box-button box-button-more"
                                            onClick={ handleClick}
                                        >
                                            <strong>Xem thêm Sản phẩm</strong>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}