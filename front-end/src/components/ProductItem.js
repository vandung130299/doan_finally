import { Link } from "react-router-dom";
import { formatVnd } from './../utils/formatMoney';
import { api_img } from '../constants/Config';

function ProductItem(props) {
    const { id, price, productname, imageurl } = props.product;
    return (
        <div className="col l-2-4 m-4 c-6">
            <Link to={`/dien-thoai/${id}`} className="home-product-item">
                <div className="home-product-item__img" style={{
                    backgroundImage: `url(${imageurl})`
                }}>
                </div>
                {/* <img src={`${api_img}${productPictures[0].img}`}/> */}
                <h4 className="home-product-item__name">{productname}</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-current">{formatVnd(price)}</span>
                    {/* <span className="home-product-item__price-old">{formatVnd(price)}</span> */}
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-present">-{10}%</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
