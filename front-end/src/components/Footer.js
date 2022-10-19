import './../css/footer.css'
function Footer() {
    return (
        <footer className="footer">

            <div className="grid wide">
                <div className="row">
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-item__link" href="">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link" href="">PhoneShop mall</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link" href="">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-item__link" href="">Giới thiệu về Phone-Shop về việt nam</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link" href="">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link" href="">Điều khoản Phone-Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-0 c-0">
                    </div>
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-item__link" href="">
                                    <i className="footer-item__link-icon fab fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link" href="">
                                    <i className="footer-item__link-icon fab fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link" href="">
                                    <i className="footer-item__link-icon fab fa-linkedin"></i>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Cửa hàng theo ứng dụng</h3>
                        <div className="footer__download">
                            <img className="footer__download-qr" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png" alt="Download QR" />
                            <div className="footer__download-apps">
                                <a href="">
                                    <img className="footer__download-app-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" alt="Download ch_play" />
                                </a>
                                <a href="">
                                    <img className="footer__download-app-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" alt="Download app_store" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
