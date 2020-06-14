import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Tips from "./pages/Tips";

import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" exact />
      <Route component={Register} path="/register" exact />
      <Route component={Tips} path="/tips" exact />
    </BrowserRouter>
  );
};

export default Routes;
