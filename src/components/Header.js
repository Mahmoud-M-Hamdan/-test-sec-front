import React, { Component } from 'react'
import {Container,Navbar,Nav } from 'react-bootstrap';
 class Header extends Component {
    render() {
        return (
            <>
              <Navbar bg="primary" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favourets">Favourite</Nav.Link>

    </Nav>
    </Container>
  </Navbar>   
            </>
        )
    }
}

export default Header
