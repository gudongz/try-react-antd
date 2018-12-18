import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";

// import { createBrowserHistory } from 'history'
// const history = createBrowserHistory()

//引入组件
import App from './App';
import Login from './views/login'



import './index.css';



ReactDOM.render(
    <BrowserRouter>
        <Router>
            <Switch>
                {/* <Route path='/login' exact component={ Login }></Route>
                <Route path='/' component={ App }></Route>              */}
                <Route path='/login' exact 
                    render = {() => JSON.parse(sessionStorage.getItem('user')) ? <Redirect to = "/test1" /> : <Login />}
                />
                <Route path='/' 
                    render = {() => JSON.parse(sessionStorage.getItem('user')) ? <App /> : <Redirect to = "/login" />}
                />   
            </Switch>
        </Router>
    </BrowserRouter>
    
    ,document.getElementById('root')
);
