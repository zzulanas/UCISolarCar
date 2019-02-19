import React, { Component } from 'react'
import logo from '../../static/favicon2.png'
import TransitionLink from 'gatsby-plugin-transition-link'
import Link from 'gatsby-plugin-transition-link'
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
          <TransitionLink className="navbar-item" to="./">
            <img style={logoStyle} src={logo} alt="UCI Solar Car" />
            <span className="title is-4">UCI Solar Car</span>
          </TransitionLink>
          <span className= { this.state.burgerOpen ? "navbar-burger burger is-active" : "navbar-burger burger"  } onClick={this.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={ this.state.burgerOpen ? 'navbar-menu is-active' : 'navbar-menu'} id="navMenu">
          <div className="navbar-end">
            <TransitionLink to="/" className="navbar-item" activeStyle = {activeNavStyle}>
              Home
            </TransitionLink>
            <TransitionLink  to="/blog/" className="navbar-item" activeStyle = {activeNavStyle}>
              Blog
            </TransitionLink>
            <TransitionLink to="/teams/" className="navbar-item" activeStyle = {activeNavStyle}>
              Team
            </TransitionLink>
            <TransitionLink to="/electrical/" className="navbar-item" activeStyle = {activeNavStyle}>
              Electrical
            </TransitionLink>
            <TransitionLink to="/mechanical/" className="navbar-item" activeStyle = {activeNavStyle}>
              Mechanical
            </TransitionLink>
            <TransitionLink to="/sponsors/" className="navbar-item" activeStyle = {activeNavStyle}>
              Sponsors
            </TransitionLink>
          </div>
        </div>
      </nav>
    )
  }
}
