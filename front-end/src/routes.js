import CartContainer from './containers/Cart';
import HomePage from './pages/HomePage';
import User from './containers/User';
import Products from './containers/Product';
import ProductDetail from './containers/Product/ProductDetail';
import Order from './containers/Order';

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Products title="Điện thoại nổi bật" />
    },
    {
        path: '/cart',
        exact: true,
        main: () => <CartContainer />
    },
    {
        path: '/order',
        exact: true,
        main: () => <Order />
    },
    {
        path: '/info-editing',
        exact: true,
        main: () => <User />
    },
    {
        path: '/dien-thoai/:slug',
        exact: false,
        main: ({ match, history }) => <ProductDetail match={match} history={history} />
    },
    // {
    //     path: '/:slug',
    //     exact: false,
    //     main: ({ match }) => <ProductListContainer match={match} />
    // },

];
export const routesPage = [
    {
        path: '/',
        exact: false,
        main: () => <HomePage />
    }
];
