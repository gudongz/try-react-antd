import React, { Component } from 'react'
import { Page, Section } from 'react-page-layout';

class Test2 extends Component {
    render() {
        return (
            // <div>
            //     test2
            // </div>
            <Page layout="public">
                <Section slot="mainview">test2</Section>
            </Page>
        );
    }
}

export default Test2 