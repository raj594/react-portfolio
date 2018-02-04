import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export default class Header extends Component {
  render() {
    return (
	    <Navbar inverse collapseOnSelect>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="/">Robert Jaynes</a>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
			      <NavItem eventKey={1} href="/">
			        About
			      </NavItem>
			      <NavItem eventKey={2} href="/portfolio">
			        Portfolio
			      </NavItem>
			      <NavItem eventKey={3} href="/contact">
			        Contact
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
    );
  }
}