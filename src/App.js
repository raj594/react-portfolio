import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
              <Route path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
              <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
