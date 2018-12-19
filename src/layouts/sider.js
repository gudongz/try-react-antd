import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Button } from 'antd'
import { withRouter } from 'react-router-dom'


const { Sider } = Layout
const { SubMenu } = Menu

class SiderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuKey: ['/test1'],
            collapsed: false,
        }
    }

    componentWillMount() {
        this.setSelectKey(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.setSelectKey(nextProps)
    }

    setSelectKey(val) {
        this.setState({
            menuKey: [val.location.pathname],
        })
    }

    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        console.log(this.state)
        return (
            <Sider className="sider" 
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >
                <div className="sider-button">
                    <Button type="primary" size={this.state.collapsed ? "small" : "default" }  onClick={ this.toggleCollapsed.bind(this) }>
                        <Icon type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' } />
                    </Button>
                </div>
                
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["/test1"]}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={this.state.menuKey}
                    style={{ height: '100%', borderRight: 0}}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
                        <Menu.Item key="/test1">
                            <Link to="/test1">test1</Link>
                        </Menu.Item>
                        <Menu.Item key="/test2">
                            <Link to="/test2">test2</Link>
                        </Menu.Item>
                        <Menu.Item key="/affix">
                            <Link to="/affix">固定</Link>
                        </Menu.Item>
                        <Menu.Item key="/dropdown">
                            <Link to="/dropdown">下拉菜单</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" /><span>subnav 2</span></span>}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" /><span>subnav 3</span></span>}>
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SiderBar) 