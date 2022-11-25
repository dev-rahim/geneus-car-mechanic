import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home">Genius Car</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-light">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#expats">Expats</Nav.Link>
                            {!user.displayName ? <Nav.Link as={HashLink} to="/login">Login</Nav.Link> :
                                <button className='btn btn-light btn-sm' onClick={logOut}>Sign Out</button>}
                        </Nav>
                        {user.displayName && <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>}
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;