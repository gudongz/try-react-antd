import React, { Component } from 'react'


import { Layout } from 'antd'

const { Header } = Layout

class HeaderMenu extends Component{
    deleteuser() {
        console.log(1111)
        sessionStorage.removeItem('user')
    }
    render() {
        return (
            <Header className="header">
                <div className="logo"></div>
                <div className="title">搜索</div>
                <div onClick={this.deleteuser} style={{color: "#fff"}}>按钮</div>
            </Header>
        )
    }
}

export default HeaderMenu