import React, { useEffect } from 'react'
import './HomeSlide.css'
import hinh1 from './../../../access/image/slider/hinh1.webp'
import hinh2 from './../../../access/image/slider/hinh2.webp'
import hinh3 from './../../../access/image/slider/hinh3.webp'
import hinh4 from './../../../access/image/slider/hinh4.webp'
import hinh5 from './../../../access/image/slider/hinh5.webp'
import hinh6 from './../../../access/image/slider/hinh6.webp'
import qc_hinh1 from './../../../access/image/qc/qc-hinh1.webp'
import qc_hinh2 from './../../../access/image/qc/qc-hinh2.webp'
import qc_hinh3 from './../../../access/image/qc/qc-hinh3.webp'
import crossbar from './../../../access/image/qc/crossbar.webp'
import crossbar_sm from './../../../access/image/qc/crossbar-sm.webp'
import useViewport from '../../../helpers/userViewport'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../../actions/category.action'
import { Link } from 'react-router-dom'


/**
* @author
* @function HomeSlide
**/

export const HomeSlide = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])



  const listIconClass = ['icon-cps-3', 'icon-cps-380', 'icon-cps-4', 'icon-cps-220', 'icon-cps-610', 'icon-cps-845', 'icon-cps-30', 'icon-cps-3', 'icon-cps-3', 'icon-cps-3'];




  const viewPort = useViewport();
  const isMobile = viewPort.width <= 739;
  return (
    <div className="homeSlide">
      <div className="grid wide">
        <div className="row box-sliding">
          <div className="col l-2 m-0 box-sliding__left hide-on-mobile">
            <div className="row">
              <div className="col l-12 ">
                <ul className="box-list-menu">
                  {/*Begin dropdown */}
                  {/* <li className="menu-item">
                      <a href="/#">
                        <i className="icon-cps-3"></i>
                        <span>Điện Thoại</span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                      <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                          <a href="/#">
                            <span>Apple</span>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </a>
                          <ul className="box-list-menu box-menu__child">
                            <li className="menu-item">
                              <a href="/#">
                                <span>Apple</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Sam Sung</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Xiaomi</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Oppo</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Nokia</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/#">
                                <span>Realme</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Sam Sung</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Xiaomi</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Oppo</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Nokia</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/#">
                            <span>Realme</span>
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  {/*End dropdown */}


                  {category.categories.length > 0 && category.categories.map((item, index) => (
                    <li key={index} className="menu-item">
                      <Link to={`/product?categoryId=${item.id}`}
                      // onClick={(e) =>{ e.preventDefault(); props.history.push(`/product?categoryId=${item.id}`)}}
                      >
                      <i className={listIconClass[index]}></i>
                      <span>{item.categoryname} </span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      
                    </Link>
                    </li>
                ))
                  }

                <li className="menu-item">
                  <a href="/#">
                    <i className="icon-cps-tcdm"></i>
                    <span>Thu cũ</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/#">
                    <i className="icon-cps-29"></i>
                    <span>Hàng cũ</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/#">
                    <i className="icon-cps-123"></i>
                    <span>Sim Thẻ</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/#">
                    <i className="icon-cps-tech"></i>
                    <span>Tin Công Nghệ</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/#">
                    <i className="icon-cps-promotion"></i>
                    <span>Khuyến Mãi</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col l-7 c-12 box-sliding__center">
          <div className="swipper-container">
            <div className="carousel carousel-main"
              data-flickity='{"autoPlay":2500,
                 "imagesLoaded": true,
                 "wrapAround": true,
                  "percentPosition": true,
                  "pageDots": false}'
            >
              <img src={hinh1} alt="hinh1" />
              <img src={hinh2} alt="hinh2" />
              <img src={hinh3} alt="hinh3" />
              <img src={hinh4} alt="hinh4" />
              <img src={hinh5} alt="hinh5" />
              <img src={hinh6} alt="hinh6" />
              <img src={hinh1} alt="hinh1" />
              <img src={hinh2} alt="hinh2" />
              <img src={hinh3} alt="hinh3" />
              <img src={hinh4} alt="hinh4" />
            </div>

            <div className="carousel carousel-nav"
              data-flickity='{ "asNavFor": ".carousel-main",
                  "wrapAround": true, "pageDots": false,
                     "prevNextButtons": false }'
            >
              <div className="carousel-cell">
                <p className="title-top">Mở bán REDMI 10</p>
                <p className="title-bottom">Hotsale giảm sập sàn</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">LAPTOP TỰU TRƯỜNG </p>
                <p className="title-bottom"> Giá tốt quà khủng</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">ĐỒNG HỒ HUAWEI</p>
                <p className="title-bottom"> Tuần lễ giảm sốc</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">ASUS ROG PHONE 5 </p>
                <p className="title-bottom">  Độc quyền quà hấp dẫn</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">NỒI CHIÊN XIAOMI </p>
                <p className="title-bottom"> Mở bán giá tốt</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">SIÊU PHẨM APPLE </p>
                <p className="title-bottom"> Nhận tin về hàng ngay</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">Mở bán REDMI 10</p>
                <p className="title-bottom">Hotsale giảm sập sàn</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">LAPTOP TỰU TRƯỜNG </p>
                <p className="title-bottom"> Giá tốt quà khủng</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">ĐỒNG HỒ HUAWEI</p>
                <p className="title-bottom"> Tuần lễ giảm sốc</p>
              </div>
              <div className="carousel-cell">
                <p className="title-top">ASUS ROG PHONE 5 </p>
                <p className="title-bottom">  Độc quyền quà hấp dẫn</p>
              </div>

            </div>
          </div>
        </div>
        <div className="col l-3 m-0 box-sliding__right hide-on-mobile">
          <div className=" qc-wrapper">
            <a href="/#">
              <img src={qc_hinh1} alt="qc" />
            </a>
            <a href="/#">
              <img src={qc_hinh2} alt="qc" />
            </a>
            <a href="/#">
              <img src={qc_hinh3} alt="qc" />
            </a>
          </div>
        </div>
      </div>
      <div className="row box-crossbar">
        <div className="col l-12 c-12 box-crossbar__col">
          <div className="box-crossbar__content">
            <a href="/#" className="">
              {
                isMobile
                  ? <img src={crossbar_sm} alt="crossbar_sm" />
                  : <img src={crossbar} alt="crossbar" />
              }

            </a>
          </div>
        </div>
      </div>
    </div>
    </div >
  )

}