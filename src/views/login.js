import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import '../less/viewsStyle/login.less'

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                this.props.history.push('/test1')
                console.log('Received values of form: ', values);
                
            }
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={ this.handleSubmit.bind(this) } className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules:[{required: true, message: 'Please input your username!'}]
                    })(
                        <Input prefix={<Icon type="user" />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                        <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                    
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Button className="login-button" type="primary" htmlType="submit">Login in</Button>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(LoginForm);

export default Login 