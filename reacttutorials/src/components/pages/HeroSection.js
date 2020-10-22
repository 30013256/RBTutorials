import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import HeroImg from './HeroImg.jpg';
import { Link } from 'react-router-dom';



export default class HeroSection extends React.Component {
    render() {
        return (     
            <Jumbo fluid className="d-flex align-items-center text-white" style={heroStyle}>
                <Container style={{maxWidth: '1400px'}}>
                    <h1 className="font-weight-bold" style={{ fontSize: '100px', marginBottom: '3rem'}}>
                        Learn Reactjs
                    </h1>
                    <p style={{ marginBottom: '3rem', fontSize: '20px'}} >
                        React is a Javascript framework for building user interfaces
                    </p>                   
                    <Button style={buttonStyle}>
                        <Link className="text-white text-decoration-none" to="/tutorials">Take Tutorial</Link>
                    </Button>       
                </Container>           
            </Jumbo> 
        )
    }
}

const heroStyle = { 
    textAlign: 'center',
    background: `URL(${HeroImg})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    padding: '15px',  
}

const buttonStyle = {
    background: 'linear-gradient(to bottom left, rgba(67,169,170,1), rgba(105,67,170,1))',
    border: 'none',
    padding: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
}