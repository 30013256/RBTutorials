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
                   
                   

                    
                </Container>          
            </div>
        )
    }
}

