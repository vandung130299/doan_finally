import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, getAllReceipt, getListAccount, getProducts, isUSerLoggedIn } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import { Account } from "./containers/Account";
import { Supplier } from "./containers/Supplier";
import { Receipt } from "./containers/Receipt";
import { Category } from "./containers/Category";
import { Brand } from "./containers/Brand";
import { ToastContainer } from "react-toastify";
import { getAllBrand } from "./actions/brand.action";

function App() {

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUSerLoggedIn(true));
    }
    // load trc danh muc va product
    if (auth.authenticate) {
      // dispatch(getListAccount());
      // dispatch(getAllBrand());
      // dispatch(getAllOrder());
      // dispatch(getProducts());
      // dispatch(getAllReceipt());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/account" exact component={Account} />
        {/* <PrivateRoute path="/page" exact component={NewPage} /> */}
        <PrivateRoute path="/category" exact component={Category} />
        <PrivateRoute path="/brand" exact component={Brand} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <PrivateRoute path="/supplier" exact component={Supplier} />
        <PrivateRoute path="/receipt" exact component={Receipt} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
