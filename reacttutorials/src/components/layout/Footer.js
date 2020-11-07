import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from './RBTLogo.png';


export default function Footer() {
    return (
        <footer style={footerStyle}>
            <Container className="text-white d-flex justify-content-around" style={{maxWidth: '1400px'}}>             
                <div style={{ fontSize: '30px' }}>
                    <img
                        src={Logo}
                        height="50"
                        className="d-inline-block align-top"
                        alt="RBLogo"
                    />
                    {' '}
                    Tutorials
                </div>
                
                <div className="text-center">
                    <h2>About</h2>
                    <a style={linkStyle} href="/">
                        <p>link</p>
                    </a> 
                    <a>
                        <p>link</p>
                    </a>    
                </div>
                <div className="text-center">
                    <h2>Other</h2> 
                    <a>
                        <p>link</p>
                    </a> 
                    <a>
                        <p>link</p>
                    </a>  
                </div>                     
            </Container>
        </footer>
    )
}

const footerStyle = {
    background: '#2E3133',
    height: '400px',
    paddingTop: '3rem',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
}