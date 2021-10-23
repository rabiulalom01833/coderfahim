import React from 'react';

import { Navbar, Container, Nav, Image } from 'react-bootstrap';

import TopHeader from '../Header/Top_header';
 

import Logo from '../../assets/img/logo.png';

import '../Header/header.css';

function Header() {
    return (
        <>

            <TopHeader />
 
            <Navbar expand="lg" sticky="top" className="top_nav">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#banner">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
