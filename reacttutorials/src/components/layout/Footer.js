import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from './RBTLogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <footer style={footerStyle}>
            <Container className="text-white" style={{maxWidth: '1400px'}}>             
                <Row>
                    <Col md className="text-center mb-4" style={{ fontSize: '30px' }}>
                        <img
                            src={Logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="RBLogo"
                        />
                        {' '}
                        Tutorials
                    </Col>
                    <Col md className="text-center mb-4">
                        <h2>About</h2>
                        <a style={linkStyle} href="https://github.com/30013256/RBTutorials">
                            <p>Github</p>
                        </a> 
                        <NavLink style={linkStyle} to="/documentation">
                            Documentation
                        </NavLink>  
                    </Col>
                    <Col md className="text-center mb-4">
                        <h2>Contact</h2> 
                        <a>
                            <p>jacquesrockell@gmail.com</p>
                        </a> 
                        <a>
                            <p>stephenb3213@gmail.com</p>
                        </a> 
                    </Col>
                </Row>                    
            </Container>
        </footer>
    )
}

const footerStyle = {
    background: '#2E3133',
    paddingBottom: '3rem',
    paddingTop: '3rem',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
}