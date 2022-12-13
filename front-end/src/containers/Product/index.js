import '../../css/home/home.css';
import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import NotFound from '../../components/NotFound';
import ProductItem from '../../components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getListProduct } from '../../actions';
import { useLocation } from "react-router-dom";
import './style.css';
const size = 5;
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Products(props) {
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { total } = product;
    let totalPage = Math.ceil(total / size);
    // console.error('totalPage: ', totalPage)
    // console.error('page: ', page)
    // console.error('page: ', total)
    // let classPagePrevious = '';
    // let classPageNext = '';
    // if (totalPage) {
    //     classPagePrevious = '';
    //     classPageNext = '';
    //     if (page == totalPage) {
    //         classPageNext = 'disabled';
    //     }
    //     if (page == 0) {
    //         classPagePrevious = 'disabled';
    //     }
    // }
    let query = useQuery();

    let showProductList = (products) => {
        let output = null;
        if (products && products.length > 0) {
            output = products.map((product, index) => {
                return (<ProductItem
                    key={index}
                    product={product}
                />)
            })
        } else {
            output = <NotFound width='' content="Không tìm thấy sản phẩm" />
        }
        return output;
    }

    useEffect(() => {
        const categoryId = query.get('category')
        const brandId = query.get('brand')
        const price = query.get('price')
        const page = query.get('page')
        const size = query.get('size')
        const key = query.get('key')
        dispatch(getListProduct(categoryId, brandId, price, page, key, size));
    }, [])
    // const onSetPage = (number) => {
    //     // console.error(' page + number: ',  page + number)
    //     setPage(page + number);
    //     let keySearch = query.get("search") ? query.get("search") : '';
    //     dispatch(getListProduct(props.idCategory, props.idBrand, keySearch, page + number, 2));
    // }
    const showNumberPage = (totalPage) => {
        let pageUrl = query.get("page") ? query.get("page") : '';
        let keySearch = query.get("search") ? query.get("search") : '';
        const rs = [];
        if (keySearch) {
            rs.push(<li key={'198741'} className={'pagination-item disabled' + page == 1 ? 'disabled' : ''}>
                <a href={page == 0 ? '' : `/search/?search=${keySearch}&page=${page}`} className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-left"></i>
                </a>
            </li>);
            for (let index = 1; index < totalPage + 1; index++) {
                rs.push(<li key={index} className={`pagination-item pagination-item--active ${page + 1 == index ? 'active' : ''}`}>
                    <a href={`/search/?search=${keySearch}&page=${index}`} className="pagination-item__link">{index}</a>
                </li>);
            }
            rs.push(<li key={'19874'} className={'pagination-item disabled' + page == 1 ? 'disabled' : ''} >
                <a href={page == totalPage - 1 ? '' : `/search/?search=${keySearch}&page=${page + 2}`} className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right"></i>
                </a>
            </li>)
        } else {
            rs.push(<li key={'198741'} className={'pagination-item disabled' + page == 1 ? 'disabled' : ''}>
                <a href={page == 0 ? '' : `/?search=&page=${page}`} className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-left"></i>
                </a>
            </li>);
            for (let index = 1; index < totalPage + 1; index++) {
                rs.push(<li key={index} className={`pagination-item pagination-item--active ${page + 1 == index ? 'active' : ''}`}>
                    <a href={`/?search=&page=${index}`} className="pagination-item__link">{index}</a>
                </li>);
            }
            rs.push(<li key={'19874'} className={'pagination-item disabled' + page == 1 ? 'disabled' : ''} >
                <a href={page == totalPage - 1 ? '' : `/?search=&page=${page + 2}`} className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right"></i>
                </a>
            </li>)
        }
        return rs;
    }
    return (
        <React.Fragment>
            {props.idBrand || props.idCategory || props.search ? null : <Slider />}
            <div className="shop__list">
                <div className="title">
                    <h4>{props.title}</h4>
                </div>
                <div className="list__items grid row">
                    {product ? showProductList(product.products) : null}
                </div>
            </div>
            {/* <ProductList title={title}>
                {showProductList(products)}
            </ProductList> */}
            {/* <ul style={{ width: '100%', display: 'flex', justifyContent: 'center' }} className="pagination home__pagination">
                {totalPage ? showNumberPage(totalPage) : null}
            </ul> */}
        </React.Fragment>
    );
}
export default Products;