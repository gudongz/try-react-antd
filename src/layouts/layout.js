import React, { Component } from 'react'
import { Layout } from 'antd'

import HeaderMenu from './header'
import SiderBar from './sider'
import Bread from './breadcrumb'

import Test1 from '../views/test1'
import Test2 from '../views/test2'
import Affix from '../views/affix'
import Dropdown from '../views/dropdown'


import '../less/layouts.less'

import { Route, Switch, Redirect } from "react-router-dom";

const {  Content } = Layout

class layout extends Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <HeaderMenu />
                    <Layout>
                        <SiderBar />
                        <Layout className="layout-content">
                            <Bread />
                            <Content className="content">

                                <Switch>
                                    <Route exact  path="/test1" component={ Test1 } />
                                    <Route exact path="/test2" component={ Test2 } />
                                    <Route exact path="/affix" component={ Affix } />
                                    <Route exact path="/dropdown" component={ Dropdown } />
                                    <Redirect to='/test1' />
                                </Switch> 

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default layout 