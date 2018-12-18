import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import { BrowserRouter as Router , Route, Switch } from "react-router-dom";

import { createBrowserHistory, createHashHistory } from 'history'

//引入组件
import App from './App';
import Login from './views/login'


import './index.css';

const history = createBrowserHistory()

ReactDOM.render(
    <BrowserRouter>
        <Router history={history}>
            <Switch>
                <Route path='/login' exact component={ Login }></Route>
                <Route path='/' component={ App }></Route>             
            </Switch>
        </Router>
    </BrowserRouter>
    
    ,document.getElementById('root')
);
