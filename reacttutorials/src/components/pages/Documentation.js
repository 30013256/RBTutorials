import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayScrollbars from 'overlayscrollbars';


export class Documentation extends Component {

    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div>
                <Container className="text-dark" style={{maxWidth: '1400px', minHeight: '100vh'}}>
                    <Row>   
                        <Col md="auto" style={{ marginTop: '200px' }}>               
                            <h1>Getting Started</h1>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                        </Col>
                    </Row>
                </Container> 
            </div>
        )
    }
}

export default Documentation
