import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap'

class Home extends Component {

  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <h1>About Robert</h1>
        </Jumbotron>;
      </div>
    );
  }
}

export default Home;