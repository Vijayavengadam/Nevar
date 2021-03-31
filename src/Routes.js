import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Subdivision1 from "./subdivision 1/subdivision 1";
import Subdivision2 from "./subdivision 2/subdivision 2";
import Subdivision3 from "./subdivision 3/subdivision 3";
import Login from "./Login/login";
import App2 from "./App2"
import welcome from "./Welcome/welcome"
import register from "./Welcome/register"
import Home from "./Home/Home";
import history from './history';
//import App2 from './App2';



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                    <Route path="/subdivision 1" component={Subdivision1} />
                    <Route path="/subdivision 2" component={Subdivision2} />
                    <Route path="/subdivision 3" component={Subdivision3} />
                    <Route path="/login" component={Login} />
                    <Route path="/App2" component={App2} />
                    <Route path="/welcome" component={welcome} />
                    <Route path="/register" component={register} />
                
                    
                </Switch>
            </Router>
        )
    }
}
