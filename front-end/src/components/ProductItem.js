import { Link } from "react-router-dom";
import { formatVnd } from './../utils/formatMoney';
import { api_img } from '../constants/Config';

function ProductItem(props) {
    const { _id, offer, price, name, productPictures } = props.product;
    const imgUrl = (productPictures.length > 0 ? productPictures[0].img : '').replace(/ /g,"%20");
    return (
        <div className="col l-2-4 m-4 c-6">
            <Link to={`/dien-thoai/${_id}`} className="home-product-item">
                <div className="home-product-item__img" style={{
                    backgroundImage: `url(${api_img}${imgUrl})`
                }}>
                </div>
                {/* <img src={`${api_img}${productPictures[0].img}`}/> */}
                <h4 className="home-product-item__name">{name}</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-current">{formatVnd(price - (price * offer / 100))}</span>
                    <span className="home-product-item__price-old">{formatVnd(price)}</span>
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-present">-{offer}%</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
