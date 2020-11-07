import React from 'react';
import HeroSection from './HeroSection';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import downArrow from './downArrow.png';
import FaqImg from './FAQ.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayScrollbars from 'overlayscrollbars';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div>            
                <Container className="text-center text-dark" style={{maxWidth: '1400px', minHeight: '100vh'}}>          
                    <Row style={{marginTop: '140px'}}>
                        <Col>
                            <h1>Demo Websites</h1>
                            <h2 className="tut-h2-mt">Movie Api Website</h2>
                            <a href="https://unruffled-villani-8d6398.netlify.app/">unruffled-villani-8d6398.netlify.app</a>
                            <p className="mt-4 TutText">
                                Website info...
                            </p>
                            
                            <h2 className="tut-h2-mt">Movie Api Website</h2>
                            <a href="https://unruffled-almeida-d123b1.netlify.app/">unruffled-almeida-d123b1.netlify.app</a>
                            <p className="mt-4 TutText">
                                Website info...
                            </p>
                            
                            <h2 className="tut-h2-mt">Movie Api Website</h2>
                            <a href="https://unruffled-villani-8d6398.netlify.app/">unruffled-villani-8d6398.netlify.app</a>
                            <p className="mt-4 TutText">
                                Website info...
                            </p>
                        </Col> 
                    </Row>
                </Container>          
            </div>
        )
    }
}

