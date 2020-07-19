import React from 'react';
import { Link, Route, Redirect, Switch} from 'react-router-dom';
import { fakeAuth } from './Components/Login';
import {Home, Category, Products, Login, Admin , Product} from './Components';




function App() {
  return (
    <div >
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
        </Switch>
    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};


export default App;