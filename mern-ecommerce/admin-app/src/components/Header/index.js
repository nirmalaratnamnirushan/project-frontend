import React from  'react';
import { Navbar , Nav , NavDropdown , Container} from 'react-bootstrap';
import {NavLink } from  'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/**
 * @author
 * @function Header
 */

const Header = (props) => {
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              {/*<Navbar.Brand href="#home">Glitters</Navbar.Brand>*/}
              <Link to="/" className="navbar-brand">Glitters</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {/*  <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>*/}
        </Nav>
        <Nav>
          {/*<Nav.Link href="#deets">Signin</Nav.Link>*/}
          <li className="nav-item">
              <NavLink to= "Login" className="nav-link" >Login</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to="Register" className="nav-link" >Register</NavLink>
          </li>
            
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    )
}

export default Header