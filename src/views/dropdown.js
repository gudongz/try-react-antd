import React, { Component } from 'react'

import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item> 
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

class dropdown extends Component{
    render() {
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <button className="ant-dropdown-link">
                    Click me <Icon type="down" />
                </button>
            </Dropdown>
                
               
        )
    }
}
export default dropdown