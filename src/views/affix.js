import React, { Component } from 'react'

import { Affix, Button } from 'antd';
import { Page, Section } from 'react-page-layout';

class Demo extends Component {
    state = {
        top: 10,
        bottom: 10,
    }

    render() {
        return (
            // <div>
                <Page layout="public">
                    <Section slot="mainview">
                        <Affix offsetTop={this.state.top}>
                            <Button
                                type="primary"
                                onClick={() => {
                                this.setState({
                                    top: this.state.top + 10,
                                });
                                }}
                            >
                                Affix top
                            </Button>
                        </Affix>
                        <br />
                        <Affix offsetBottom={this.state.bottom}>
                            <Button
                                type="primary"
                                onClick={() => {
                                this.setState({
                                    bottom: this.state.bottom + 10,
                                });
                                }}
                            >
                            Affix bottom
                            </Button>
                        </Affix>
                    
                    </Section>
                </Page>
                
            // </div>
        );
    }
}

export default Demo