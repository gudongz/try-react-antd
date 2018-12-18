import React, { Component } from 'react'


import { Layout } from 'antd'

const { Header } = Layout

class HeaderMenu extends Component{
    render() {
        return (
            <Header className="header">
                <div className="logo"></div>
                <div className="title">搜索</div>
            </Header>
        )
    }
}

export default HeaderMenu