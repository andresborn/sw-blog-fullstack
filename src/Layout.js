import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './views/Home'
import PersonProfile from "./views/PersonProfile";
import PlanetProfile from "./views/PlanetProfile";
import Register from "./views/Register"
import Login from "./views/Login"
import injectContext from './store/AppContext';

const Layout = () => {

  const bgImage = { 
    backgroundImage:"url('https://cdn.dribbble.com/users/4937419/screenshots/10664554/dribble_twin_suns_red_4x.png')"
  }

  return (
    <div style={bgImage}>
      <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/sw-blog/" component={Home} />
        <Route exact path="/sw-blog/person/:id" component={PersonProfile} />
        <Route exact path="/sw-blog/planet/:id" component={PlanetProfile} />
        <Route exact path="/sw-blog/register/" component={Register} />
        <Route exact path="/sw-blog/login/" component={Login} />
      </Switch>
    </BrowserRouter>
    </div>
    
  );
};

export default injectContext(Layout);
