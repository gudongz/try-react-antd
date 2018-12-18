import React, { Component } from 'react'
import { Page, Section } from 'react-page-layout';

class Test1 extends Component {
    render() {
        return (
            // <div>
            //     test1
            // </div>
            <Page layout="public">
                <Section slot="mainview">test1</Section>
            </Page>
        );
    }
}

export default Test1 