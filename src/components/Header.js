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
			      <NavItem eventKey={1} href={process.env.PUBLIC_URL + "/"}>
			        About
			      </NavItem>
			      <NavItem eventKey={2} href={process.env.PUBLIC_URL + "/portfolio"}>
			        Portfolio
			      </NavItem>
			      <NavItem eventKey={3} href={process.env.PUBLIC_URL + "/contact"}>
			        Contact
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
    );
  }
}