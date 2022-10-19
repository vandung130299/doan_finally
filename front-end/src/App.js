import './css/grid.css';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routesPage } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isUserLoggedIn } from './actions';


function App() {

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [])

  let showPages = (routesPage) => {
    let rs = null;
    if (routesPage.length) {
      rs = routesPage.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      })
    }
    return rs;
  }


  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Switch>
          {showPages(routesPage)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
