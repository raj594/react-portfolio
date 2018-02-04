import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { FormBtn } from '../components/FormBtn';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
  		email: '',
  		message: ''
		}
	};

  render() {
    return (
    	<div>
	    	<Jumbotron className="jumbo">
	        <h1>Contact Me</h1>
	      </Jumbotron>
	    	<div className="container-fluid">
	        <form>
		        <h3>Name</h3>
		        <Input
		        	value={this.state.name}
		          onChange={this.handleInputChange}
		          name="name"
		          placeholder="John Smith"
		        />
		        <h3>Email</h3>
		        <Input
		        	value={this.state.email}
		          onChange={this.handleInputChange}
		          name="email"
		          placeholder="example@gmail.com"
		        />
		        <h3>Message</h3>
		        <TextArea
		        	value={this.state.message}
		          onChange={this.handleInputChange}
		          name="message"
		        />
	      		<FormBtn
	            disabled={!(this.state.name && this.state.email && this.state.message)}
	            onClick={this.handleFormSubmit}
	          >
	            Send Message
	          </FormBtn>
	        </form>
	      </div>
      </div>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };
}

export default Contact;