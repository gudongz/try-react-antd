import React from 'react';
import ReactDOM from 'react-dom';

import { LayoutProvider } from 'react-page-layout'
import { BrowserRouter as Router , BrowserRouter, Route, Switch } from "react-router-dom";

//引入组件
import App from './App';
import Test1 from './views/test1'
import Test2 from './views/test2'
import Affix from './views/affix'
import Dropdown from './views/dropdown'

import './index.css';

const layouts = {
    'public': App
}

ReactDOM.render(
    <BrowserRouter>
        {/* <App></App> */}
        <LayoutProvider layouts={layouts}>
            <Router>
                <Switch>
                    <Route exact  path="/test1" component={ Test1 } />
                    <Route path="/test2" component={ Test2 } />
                    <Route path="/affix" component={ Affix } />
                    <Route path="/dropdown" component={ Dropdown } />
                </Switch>
            </Router>
        </LayoutProvider>
    </BrowserRouter>
    
    ,document.getElementById('root')
);
