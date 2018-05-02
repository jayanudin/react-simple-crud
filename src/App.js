import React, { Component } from 'react';
import { Router, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './components/Home';
import ListUser from './components/user/ListUser';
import CreateUser from './components/user/CreateUser';

import './assets/css/bootstrap.css';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">WebSiteName</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/listUser">User</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact={false} path="/" component={Home} />
                    <Route path="/listUser" component={ListUser}/>
                    <Route path="/createUser" component={CreateUser}/>
                </div>
            </HashRouter>
        );
    }
   
}

export default App;
