import React, { Component } from 'react'
import logo from '../../static/favicon2.png'
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

const logoStyle = {
  height: '3rem',
  width: '60px',
  padding: 'none',
}

const activeNavStyle = {
  textDecoration: 'underline',
  textDecorationColor: 'blue'
}

//React Pose Page Transitions
const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);


export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.toggleBurger = this.toggleBurger.bind(this);
    this.state = {
      burgerOpen: false
    };
  }
  toggleBurger() {
    const currentState = this.state.burgerOpen;
    this.setState({burgerOpen: !currentState});
  }
  render() {
    return (
      <nav className="navbar has-shadow" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="./">
            <img style={logoStyle} src={logo} alt="UCI Solar Car" />
            <span className="title is-4">UCI Solar Car</span>
          </Link>
          <span className= { this.state.burgerOpen ? "navbar-burger burger is-active" : "navbar-burger burger"  } onClick={this.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={ this.state.burgerOpen ? 'navbar-menu is-active' : 'navbar-menu'} id="navMenu">
          <div class="navbar-end">
            <Link to="/" className="navbar-item" activeStyle = {activeNavStyle}>
              Home
            </Link>
            <Link to="/blog/" className="navbar-item" activeStyle = {activeNavStyle}>
              Blog
            </Link>
            <Link to="/electrical/" className="navbar-item" activeStyle = {activeNavStyle}>
              Electrical
            </Link>
            <Link to="/mechanical/" className="navbar-item" activeStyle = {activeNavStyle}>
              Mechanical
            </Link>
            <Link to="/sponsors/" className="navbar-item" activeStyle = {activeNavStyle}>
              Sponsors
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
