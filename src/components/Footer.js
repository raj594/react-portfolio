import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
    	<div className="footer">
		    <Navbar fluid inverse className="navbar-fixed-bottom">
		    	<Navbar.Text className="copyright">
		    		Robert Jaynes 2018
			    </Navbar.Text>
		    </Navbar>
	    </div>
    );
  }
}