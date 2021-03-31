import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{padding: 30, color:'cyan', fontFamily:'Courier New',fontWeight:'bold', fontSize: 45}}>NEVAR SYSTEMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"style={{display:'flex',padding: 20,color: 'white',fontFamily:'Roboto',fontSize: 20}}>Home</Nav.Link>
                    <Nav.Link href="/About" style={{display:'flex',fontFamily:'Roboto',padding: 20,color: 'white',fontSize: 20}}>About</Nav.Link>
                    <Nav.Link href="/Contact" style={{display:'flex',fontFamily:'Roboto',padding: 20,color: 'white',fontSize: 20}}>Contact</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);