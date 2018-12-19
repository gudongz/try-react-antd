import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'



class Bread extends Component{
    constructor(props){
        super(props)
        this.state = {
            breadList: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.changeBread(nextProps)
    }

    changeBread(val) {
        const path = val.location.pathname 
        const breadcrumbMap = {
            '/test1': ['subnav1', 'test1'],
            '/test2': ['subnav1', 'test2'],
            '/affix': ['subnav1', '固定'],
            '/dropdown': ['subnav1', '下拉菜单'],
        }
        this.setState({
            breadList: breadcrumbMap[path]
        })
    }

    render() {
        const list = this.state.breadList || []
        const breadItem = list.map((item) => 
            <Breadcrumb.Item key={item} >{item}</Breadcrumb.Item>
        )
        return (
            <Breadcrumb className="breadcrumb">
                {breadItem}
            </Breadcrumb>
        )
    }
}

export default withRouter(Bread) 