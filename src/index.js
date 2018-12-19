import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//引入组件
import App from './App';
import Login from './views/login'

import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/login'  
                render = {() => {
                    const user = JSON.parse(sessionStorage.getItem('user'))
                    return user ? <Redirect to="/test1" /> :  <Login />
                }} 
            />
            <Route path="/" 
                render ={() => {
                    const user = JSON.parse(sessionStorage.getItem('user'))
                    return user ? <App /> :  <Redirect to="/login"/>
                }}
            />
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root')
);
