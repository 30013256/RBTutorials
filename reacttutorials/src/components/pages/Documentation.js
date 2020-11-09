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
            <div style={{padding: '15px'}}>
                <Container className="text-dark" style={{maxWidth: '1400px', minHeight: '100vh', padding: '0px'}}>
                    <Row>   
                        <Col md="auto" style={{ marginTop: '200px', marginBottom: '200px' }}>               
                            <h1>Documentation</h1>
                            <h2 className="tut-h2-mt">What is this project</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Who was this project for</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">What problem/issue did this project solve</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Who was involed in this project and what were there roles</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Resources reqired to complete this project</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Tasks and milestones completed in this project</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Tasks and milestones not completed in this project</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Github repository</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">Screen shots of project</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">What went well with this project</h2>
                            <p className="mt-4 TutText">
                                This is an introdution on what react is and how to get started using it.
                            </p>
                            <h2 className="tut-h2-mt">What did not go well with this project</h2>
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
