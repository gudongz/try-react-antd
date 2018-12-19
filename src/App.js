import React, { Component } from 'react';
import Layout from './layouts/layout'


import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class App extends Component {
render() {
    return (
        <LocaleProvider locale={zh_CN}>
            <div className="App">
                <Layout></Layout>
            </div>
        </LocaleProvider>
        
    );
}
}

export default App;
