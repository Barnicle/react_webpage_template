import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../not-found";
import App from "../app";
import Nav from "../nav";
// import "./router.scss";
const Router = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="link-1">
          <a className="link-file">Файлы</a>
        </div>
        <div className="navbar">
          <Nav />
        </div>
        <div className="appbar">
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="link-2">
          <a className="link-map">Местоположение</a>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Router;
