import React from 'react';
import Logo from './RBTLogo.png';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar expand="md" className="customnav" fixed="top"  style={navStyle}>
                <Container style={{ maxWidth: '1400px', padding: '0' }}>
                    <NavLink to="/">
                        <Navbar.Brand className="text-white" style={{ fontSize: '30px' }}>
                            <img
                                src={Logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="RBLogo"
                            />
                            {' '}
                            Tutorials           
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto text-light">
                            <Nav.Item className="d-none d-md-block">
                                <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" end={true} activeStyle={activeStyle} to="/" activeStyle={activeStyle}>
                                    Home
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="d-none d-md-block">
                                <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" to="/about" activeStyle={activeStyle}>
                                    About
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="d-none d-md-block">                                  
                                <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" to="/demowebsites" activeStyle={activeStyle}>
                                    Demos
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="d-none d-md-block">                                  
                                <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" to="/tutorials" activeStyle={activeStyle}>
                                    Tutorials
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="d-none d-md-block">                                  
                                <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" to="/documentation" activeStyle={activeStyle}>
                                    Documentation
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="m-2 d-md-none">                                  
                                <NavLink className="text-white text-decoration-none" to="/">
                                    Home
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="m-2 d-md-none">                                  
                                <NavLink className="text-white text-decoration-none" to="/about">
                                    About
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="m-2 d-md-none">                                  
                                <NavLink className="text-white text-decoration-none" to="/demowebsites">
                                    Demos
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="m-2 d-md-none">                                  
                                <NavLink className="text-white text-decoration-none" to="/tutorials">
                                    Tutorials
                                </NavLink> 
                            </Nav.Item>
                            <Nav.Item className="m-2 d-md-none">                                  
                                <NavLink className="text-white text-decoration-none" to="/documentation">
                                    Documentation
                                </NavLink> 
                            </Nav.Item>
                        </Nav>         
                    </Navbar.Collapse>
                </Container>      
            </Navbar>
        </header>
    )
}

const activeStyle = {
    paddingTop: '26px',
    paddingBottom: '25px',
    width: '100%',
    background: 'linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,0) 105%)',
    borderWidth: '0 0 5px 0',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to left, rgba(95,0,255,1), rgba(0,255,192,1)) 1' 
}

const navStyle = {
    background: 'rgba( 46, 49, 51, 1)',
    backdropFilter: 'blur(2px)',
}