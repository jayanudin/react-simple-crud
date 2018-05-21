import React, { Component } from 'react';
import { IndexRoute, hashHistory, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Home from './components/Home';
import ListUser from './components/user/ListUser';
import CreateUser from './components/user/CreateUser';
import EditUser from './components/user/EditUser';

import './assets/css/bootstrap.css';

class App extends Component {

    render() {
        return (

            <Router>
                <AnimatedSwitch
                      atEnter={{ opacity: 0 }}
                      atLeave={{ opacity: 0 }}
                      atActive={{ opacity: 1 }}
                      className="switch-wrapper"
                    >
                    <div>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">WebSiteName</a>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/"
                                    >Home</Link></li>
                                    <li><Link to="/listUser">User</Link></li>
                                </ul>
                            </div>
                        </nav>
                        <Route exact={false} path="/" component={Home} />
                        <Route path="/listUser" component={ListUser}/>
                        <Route path="/createUser" component={CreateUser}/>
                        <Route path="/editUser/:id" component={EditUser}/>
                    </div>
                </AnimatedSwitch>
            </Router>
        );
    }
   
}

export default App;
