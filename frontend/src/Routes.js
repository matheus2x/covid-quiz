import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Tips from "./pages/Tips";

import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Tips} path="/tips" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
