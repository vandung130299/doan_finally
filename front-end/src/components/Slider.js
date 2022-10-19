function Slider() {
    return (
        <div className="shop__slider">
            <input type="radio" name="slider" id="slide1" />
            <input type="radio" name="slider" id="slide2" defaultChecked />
            <input type="radio" name="slider" id="slide3" />
            <input type="radio" name="slider" id="slide4" />
            <div id="slides">
                <div id="overflow">
                    <div className="inner">
                        <div className="slide slide_1">
                            <a href="">
                                <img src="https://hoanghamobile.com/i/home/Uploads/2021/03/19/nokia-54-web.png" alt="" />
                            </a>
                        </div>
                        <div className="slide slide_2">
                            <a href="">
                                <img src="https://hoanghamobile.com/i/home/Uploads/2021/03/20/s21-83.png" alt="" />
                            </a>
                        </div>
                        <div className="slide slide_3">
                            <a href="">
                                <img src="https://hoanghamobile.com/i/home/Uploads/2021/03/19/a32a52a72-web.png" alt="" />
                            </a>
                        </div>
                        <div className="slide slide_4">
                            <a href="">
                                <img src="https://hoanghamobile.com/i/home/Uploads/2021/03/19/web-xiaomi-1.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="grid1 row mb-0" id="bullets">
                <label className="col c-3" htmlFor="slide1">
                    <span>Mua Repo5 5G tặng quà khủng</span>
                </label>
                <label className="col c-3" htmlFor="slide2">
                    <span>Mua Nokia - nhận ngay data khủng</span>
                </label>
                <label className="col c-3" htmlFor="slide3">
                    <span>Redmi Note 10 Series - Khuyến mại lớn</span>
                </label>
                <label className="col c-3" htmlFor="slide4">
                    <span>Lên đời watch Active 2 hấp dẫn</span>
                </label>
            </ul>
        </div>
    );
}

export default Slider;
