import './App.css';
import './access/css/grid.css';
import './access/css/icon.css';
import './access/css/base.css';
import { HomePage } from './components/HomePage/HomePage';
// import './access/css/reponsive.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from './components/Page/NotFound/NotFound';
import { Mobile } from './components/Mobile/Mobile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUSerLoggedIn } from './actions/auth.action';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { CartPage } from './components/CartPage/CartPage';
import { getCartItems } from './actions/cart.action';
import { Order } from './components/Order/Order';


function App() {


  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUSerLoggedIn())
    }
  }, [auth.authenticate])

  useEffect(() => {
    // console.error('App.js - updateCart')
    dispatch(getCartItems());
  }, [auth.authenticate]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product" component={Mobile} />
          <Route path="/productDetails/:productId" component={ProductDetails} />
          <Route path="/cart" component={CartPage} />
          <Route path="/order" component={Order} />
          <Route path="/contact" component={HomePage} />
          <Route path="/checkout" component={HomePage} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
