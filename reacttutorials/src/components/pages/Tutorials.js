import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Routes, Route } from 'react-router-dom';
import Tut1 from './tutorials/Tut1';
import Tut2 from './tutorials/Tut2';
import Tut3 from './tutorials/Tut3';
import TutNetlify from './tutorials/TutNetlify';
import OverlayScrollbars from 'overlayscrollbars';


export default class Tutorials extends React.Component {
    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div style={{padding: '15px'}}>
                <Container style={{ maxWidth: '1400px', padding: '0' }}>
                    <Row className="d-none d-md-inline">
                        <Col md="auto" className="pr-0 position-fixed" style={colNavStyle}>
                            <div className="d-flex flex-column" style={{marginTop: '140px'}}>
                                <h5 className="text-dark ml-0 pl-0">Tutorials</h5> 
                                <NavLink style={colNavItemStyle} end={true} to="/tutorials" activeStyle={activeStyle} className="text-dark text-decoration-none" >
                                    Getting Started
                                </NavLink>       
                                <NavLink style={colNavItemStyle} to="/tutorials/tickboxtutorial" activeStyle={activeStyle} className="text-dark text-decoration-none" >
                                    Tickbox
                                </NavLink>
                                <NavLink style={colNavItemStyle} to="/tutorials/wetherapptutorial" activeStyle={activeStyle} className="text-dark text-decoration-none" >
                                    Wether app
                                </NavLink>
                                <NavLink style={colNavItemStyle} to="/tutorials/netlifytutorial" activeStyle={activeStyle} className="text-dark text-decoration-none" >
                                    Netlify
                                </NavLink>
                            </div>                     
                        </Col>
                        <Col md="auto" className="pr-0 position-fixed" style={{marginTop: '61px', width: '200px', borderRight: 'solid 1px lightgrey', height: '100%', zIndex: '-10'}}></Col>
                        <Col md="auto" style={{ marginLeft: '240px', marginTop: '200px', overflow: 'none' }}>               
                            <Routes>
                                <Route path="/" element={<Tut1 />}/>
                                <Route path="/tickboxtutorial" element={<Tut2 />}/>
                                <Route path="/wetherapptutorial" element={<Tut3 />}/>
                                <Route path="/netlifytutorial" element={<TutNetlify />}/>
                            </Routes>                                    
                        </Col>
                    </Row>
                    <div className="text-dark d-md-none" style={{minHeight: '100vh'}}>
                        <h1 style={{ marginTop: '8rem'}}>Small Veiw Widths Not Supported</h1>
                    </div>   
                </Container>
            </div>    
        )
    }
}

const colNavStyle = {   
    marginTop: '61px',
    width: '200px',
    height: '80vh',
}

const colNavItemStyle = {
    width: '100%',
    height: '35px',
    padding: '6px',
    zIndex: '10',
}

const activeStyle = {
    background: 'lightgrey',
    paddingBottom: '5px',
    borderWidth: '0 5px 0px 0',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to top, rgba(95,0,255,1), rgba(0,255,192,1)) 1' 
}