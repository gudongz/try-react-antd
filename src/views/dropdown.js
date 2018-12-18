import React, { Component } from 'react'

import { Menu, Dropdown, Icon } from 'antd';
import { Page, Section } from 'react-page-layout';

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
            <Page layout="public">
                <Section slot="mainview">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                            Click me <Icon type="down" />
                        </a>
                    </Dropdown>
                
                </Section>
            </Page>
            
        )
    }
}
export default dropdown