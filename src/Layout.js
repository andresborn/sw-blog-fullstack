import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './views/Home'
import PersonProfile from "./views/PersonProfile";
import PlanetProfile from "./views/PlanetProfile";

const Layout = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/sw-blog/" component={Home} />
        <Route exact path="/sw-blog/person" component={PersonProfile} />
        <Route exact path="/sw-blog/planet" component={PlanetProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;
