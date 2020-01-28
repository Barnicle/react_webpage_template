import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../not-found";
import App from "../app";
import Nav from "../nav";
import "../styles/base.scss";
import Form from "../form-page";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="navbar">
          <Nav />
        </div>
        <div className="app">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/form/" component={Form} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Router;
