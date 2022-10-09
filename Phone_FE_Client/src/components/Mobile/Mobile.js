import React, { useEffect, useRef } from 'react'
import { Layout } from '../Layout/Layout'
import './Mobile.scss'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Filter } from '../UI/Filter/Filter2';
import { CardPro } from '../UI/CardPro/CardPro';
import ip13 from './../../access/image/product/ip13-pro_2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByFilter } from '../../actions/product.action';

/**
* @author
* @function Mobile
**/


export const Mobile = (props) => {



    const product = useSelector(state => state.product);
    const dispatch = useDispatch();


    console.log("props1", props)

    const query = new URLSearchParams(props.location.search);
    let sss = (props.location.search);
    const categoryId = query.get('categoryId')
    const brandIdId = query.get('brandIdId')
    const price = query.get('price')
    const page = query.get('page')
    const size = query.get('size')
    console.log(sss)

    useEffect(() => {

        console.log("props2", props)
        const query = new URLSearchParams(props.location.search);
        const categoryId = query.get('categoryId')
        const brandId = query.get('brandId')
        const price = query.get('price')
        const page = query.get('page')
        const size = query.get('size')
        dispatch(getProductsByFilter(categoryId, brandId, price, page, size))
    }, [props.location.search])


    const ref = useRef({});

    // const next = () => {
    //     ref.current.slickNext();
    // };

    // const previous = () => {
    //     ref.current.slickPrev();
    // };
    const settings = {
        // className: 'section-outstanding__slider',
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (


        <Layout>

            <div className="test">

            </div>
            <div className="page_mobile">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col l-6 m-6 c-12">
                            <div className="slide_mobile">
                                <Slider ref={ref} {...settings}>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/flip-595-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="slide_mobile hide-on-mobile-tablet">
                                <Slider ref={ref} {...settings}>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/flip-595-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row sm-gutter list_subcate-box">
                        <div className="col l-12 m-12 c-12 list_subcate">
                            <div className="subcate_item" onClick={(e) => { e.preventDefault();console.log("props.history", props.history); sss += '&brandId=1'; props.history.push({ search: `${sss}` }) }}>
                                <a className=""
                                >
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-286.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item" onClick={(e) => { e.preventDefault(); console.log("props.history", props.history); sss += '&brandId=2'; props.history.push({ search: `${sss}` }) }}>
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-211.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item" onClick={(e) => { e.preventDefault(); console.log("props.history", props.history); sss += '&brandId=3'; props.history.push({ search: `${sss}` }) }}>
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-274.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-769.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-1214.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-721.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-vsmart.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-vivo.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-oneplus.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <p>
                                        Điện Thoại Phổ Thông
                                    </p>
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <p>
                                        Tin Đồn Mới Ra
                                    </p>
                                </a>
                            </div>





                        </div>
                    </div>
                    <div className="row block_filter">
                        <div className="col l-12 m-12 c-12 block_filter-list">
                            <div clasName="test-filter">

                                <div className="block_filter__tittle">Chọn theo tiêu chí</div>
                                <div className="list_filter box_list">
                                    <Filter
                                        title={'Bộ Lọc'}

                                    />
                                    <Filter
                                        title={'Giá'}
                                        listItem={['Dưới 5 triệu', '5 - 10 triệu', '10 - 15 triệu', '15 - 20 triệu', 'Trên 20 triệu']}
                                    />
                                    <Filter
                                        title={'Loại điện thoại'}
                                    />
                                    <Filter
                                        title={'Dung lượng RAM'}
                                    />
                                    <Filter
                                        title={'Bộ nhớ trong'}
                                    />
                                    <Filter
                                        title={'Kích thước màn hình'}
                                    />
                                    <Filter
                                        title={'Kiểu màn hình'}
                                    />
                                    <Filter
                                        title={'Tần số quét'}
                                    />
                                    <Filter
                                        title={'Tính năng đặc biệt'}
                                    />
                                    <Filter
                                        title={'Tính năng đặc biệt'}
                                    />
                                    <Filter
                                        title={'Tính năng đặc biệt'}
                                    />
                                    <Filter
                                        title={'Tính năng đặc biệt'}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col l-12 m-12 c-12 block_filter-sort">
                            <div className="block_filter__tittle">Sắp xếp theo</div>
                            <div className="list_sort box_list">
                                <Filter
                                    title={'Giá cao'}
                                    sort_link={'https://www.google.com'}
                                />
                                <Filter
                                    title={'Giá thấp'}
                                    sort_link={'https://www.google.com'}
                                />
                                <Filter
                                    title={'Xem nhiều'}
                                    sort_link={'https://www.google.com'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row product_wrapper">
                        <div className="col l-12 m-12 c-12">
                            <div className="row sm-gutter product_list">
                                {product && product.products && product.products.length > 0  ?
                                <>
                                  {product.products.map((item, index) => (
                                    <div key={index} className="col l-2-4 m-3 c-6 mb-10">
                                        <div className="product_item">
                                            <CardPro
                                                myroute={`/productDetails/${item.id}`}
                                                image={item.imageurl}
                                                percent={'0%'}
                                                name={item.productname}
                                                monitor={item.monitor}
                                                ram={item.ram}
                                                pin={item.pin}
                                                stock={'Hàng Hot'}
                                                special__price={item.price}
                                                old__price={item.price}
                                                promotion={item.infomation}
                                                rating={'59'}
                                            />
                                        </div>
                                    </div>
                                ))}
                                </>
                                : null

                                }
                                
                               
                            </div>
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <div className="more_product">
                                <a className="btn_load_more">
                                    Xem thêm sản phẩm
                                    <i class="fas fa-chevron-down"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Layout>
    )

}