import React from 'react';
import HeaderContainer from './../containers/HeaderContainer';
import Footer from './../components/Footer';
import NavbarContainer from './../containers/NavbarContainer';
import {Route, Switch, withRouter } from 'react-router-dom';
import {routes} from './../routes';

function Home(props) {
    let showContent = (routes) => {
        let rs = null;
        if (routes.length) {
            rs = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={withRouter(route.main)} />
                );
            })
        }
        return rs;
    }
    return (
        <>
            <HeaderContainer />
            <div className="shop__body">
                <div className="container">
                    <NavbarContainer />
                    <Switch>
                        {showContent(routes)}
                    </Switch>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;