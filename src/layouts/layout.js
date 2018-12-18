import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'

import HeaderMenu from './header'
import SiderBar from './sider'

import Test1 from '../views/test1'
import Test2 from '../views/test2'
import Affix from '../views/affix'
import Dropdown from '../views/dropdown'


import '../less/layouts.less'

import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";

const {  Content } = Layout

class layout extends Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <HeaderMenu></HeaderMenu>
                    <Layout>
                        <SiderBar></SiderBar>
                        <Layout className="layout-content">
                            <Breadcrumb className="breadcrumb">
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content className="content">
                                {/* {this.props.children} */}
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