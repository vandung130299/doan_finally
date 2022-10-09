import React, { useEffect, useState } from 'react'
import './Footer.css'

/**
* @author
* @function Footer
**/

export const Footer = (props) => {


  const handleHideonMobile = (e) => {
    e.target.nextSibling.classList.toggle('hide-on-mobile')
    e.target.nextSibling.nextSibling.classList.toggle('hide-on-mobile')
  }

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  
  return (
    <div className="footer">
      <div className="grid wide">
        <div className="row aa">
          <div className="col l-12 m-12 c-12">
            <div className="footer-top">
              <div className="row ">
                <div className="col l-3 m-6 c-12 footer-top__item">
                  <ul className="footer-top__item--local">
                    <li>
                      <p>
                        <strong>
                          Tìm Cửa Hàng
                        </strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/" className="">
                          Tìm cửa hàng gần nhất
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/" className="">
                          Mua hàng từ xa
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/" className="">
                          Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
                        </a>
                      </p>
                    </li>
                  </ul>
                  <ul className="footer-top__item--payment">
                    <li className="title-payment">
                      <p>
                        <strong>
                          Phương thức thanh toán
                        </strong>
                      </p>
                    </li>
                    <li className="list-payment">
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>
                      <a href="/" className="payment-item">
                        <i className="icon-cps-visa"></i>
                      </a>


                    </li>
                  </ul>
                </div>
                <div className="col l-3 m-6 c-12 footer-top__item">
                  <ul className="list__call">
                    <li>
                      <p>
                        Gọi mua hàng miền Nam:
                        <a href="/" className="call__item">
                          1800.2097
                        </a>
                        (8h00 - 22h00)
                      </p>
                    </li>
                    <li>
                      <p>
                        Gọi mua hàng miền Bắc:
                        <a href="/" className="call__item">
                          1800.2097
                        </a>
                        (8h00 - 22h00)
                      </p>
                    </li>
                    <li>
                      <p>
                        Gọi khiếu nại:
                        <a href="/" className="call__item">
                          1800.2097
                        </a>
                        (8h00 - 21h30)
                      </p>
                    </li>
                    <li>
                      <p>
                        Gọi bảo hành:
                        <a href="/" className="call__item">
                          1800.2097
                        </a>
                        (8h00 - 21h00)
                      </p>
                    </li>
                  </ul>
                  <ul className="insurance">
                    <li>
                      <p>
                        <strong>
                          Đối tác dịch vụ bảo hành
                        </strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Điện Thoại-Máy tính
                      </p>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon-cps-dtv"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col l-0 m-0 c-12 footer-top__item show-on-mobile"
                  onClick={handleHideonMobile}
                >
                  <div className="info__other"  >
                    <div className="info__other--left">
                      <h3>Thông Tin Khác</h3>
                    </div>
                    <div>
                      V
                    </div>
                  </div>
                </div>

                <div className="col l-3 m-6 c-6 footer-top__item hide-on-mobile">
                  <ul className="list_show">
                    <li>
                      <a href="/" className="list_show--href">Mua hàng và thanh toán Online</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Mua hàng trả góp Online</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Tra thông tin đơn hàng</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Tra điểm Smember</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Tra thông tin bảo hành</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Tra cứu hoá đơn điện tử</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Trung tâm bảo hành chính hãng</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Quy định về việc sao lưu dữ liệu</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Dịch vụ bảo hành điện thoại</a>
                    </li>
                  </ul>

                </div>
                <div className="col l-3 m-6 c-6 footer-top__item hide-on-mobile">
                  <ul className="list_show">
                    <li>
                      <a href="/" className="list_show--href">Quy chế hoạt động</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Chính sách Bảo hành</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Liên hệ hợp tác kinh doanh</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Đơn Doanh nghiệp</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Ưu đãi từ đối tác</a>
                    </li>
                    <li>
                      <a href="/" className="list_show--href">Tuyển dụng</a>
                    </li>

                  </ul>

                </div>


              </div>
            </div>
            <div className="footer-bottom">
              <div className="row ">
                <div className="col l-12 m-12 c-12">
                  <p className="footer-text">
                    Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC
                    - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020.
                    Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1,
                    Thành phố Hồ Chí Minh, Việt Nam.
                    Điện thoại: 028.7108.9666.
                  </p>
                </div>
                <div className="col l-12 m-12 c-12 footer-logo">
                  <a href="/#"><i className="icon-cps-tb"></i></a>
                  <a href="/#" className="dcma">
                    <img src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022" alt="ss"/>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__extension">
        {isVisible && (
          <div onClick={scrollToTop} className="onTop">
            <img src="https://nhatbanonline.net/wp-content/uploads/2019/03/back-to-top.png" alt="Quay lại đầu trang" />
          </div>
        )}
        
      </div>
    </div>
  )
}