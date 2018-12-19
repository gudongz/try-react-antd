import React, { Component } from 'react'
import { Layout, Modal } from 'antd'
import { withRouter } from 'react-router-dom'


const { Header } = Layout

class HeaderMenu extends Component{
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        console.log("退出成功!")
        sessionStorage.removeItem('user')
        this.props.history.push('/login')
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <Header className="header">
                <div className="logo"></div>
                <div className="title">搜索</div>
                <div onClick={this.showModal} style={{color: "#fff", float: "right"}}>退出</div>
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>确定要退出吗？</p>
                </Modal>
            
            </Header>
        )
    }
}

export default withRouter(HeaderMenu)