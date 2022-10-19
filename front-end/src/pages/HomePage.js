import React from 'react';
import HeaderContainer from './../containers/HeaderContainer';
import Footer from './../components/Footer';
import NavbarContainer from './../containers/NavbarContainer';
import { Route, Switch } from 'react-router-dom';
import { routes } from './../routes';
import Products from '../containers/Product';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../components/NotFound';

function HomePage(props) {
    const category = useSelector(state => state.category);
    const brand = useSelector(state => state.brand);

    let showContent = (routes, categories, brands) => {
        if (categories && categories.length > 0) {
            categories.map((category, index) => {
                routes.push({
                    path: `/${category.slug}`,
                    exact: true,
                    main: () => <Products idCategory={category._id} title={category.name} />
                });
                let myBrands = brands.filter((brand) => {
                    return brand.category === category._id;
                });
                if (myBrands && myBrands.length > 0) {
                    myBrands.map((brand) => {
                        routes.push({
                            path: `/${category.slug}/${brand.slug}`,
                            exact: true,
                            main: () => <Products idCategory={category._id} idBrand={brand._id} title={`${category.name}: ${brand.name}`} />
                        });
                    })
                }
                // return (
                //   <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                // );
            })
        }
        routes.push({
            path: '/search',
            exact: true,
            main: () => <Products search={true} title="Kết quả tìm kiếm:"/>
        })

        let rs = null;
        if (routes.length) {
            rs = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            })
        }
        return rs;
    }

    return (
        <React.Fragment>
            <HeaderContainer />
            <div className="shop__body">
                <div className="container">
                    <NavbarContainer />
                    <Switch>
                        {showContent(routes, category.categories, brand.brands)}
                    </Switch>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default HomePage;