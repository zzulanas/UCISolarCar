import React, { Component } from 'react'
import logo from '../../static/favicon2.png'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
          <AniLink cover bg="#59BF9F" className="navbar-item" to="./">
            <img style={logoStyle} src={logo} alt="UCI Solar Car" />
            <span className="title is-4">UCI Solar Car</span>
          </AniLink>
          <span className= { this.state.burgerOpen ? "navbar-burger burger is-active" : "navbar-burger burger"  } onClick={this.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={ this.state.burgerOpen ? 'navbar-menu is-active' : 'navbar-menu'} id="navMenu">
          <div className="navbar-end">
            <AniLink cover bg="#f9f2b8" to="/" className="navbar-item" activeStyle = {activeNavStyle}>
              Home
            </AniLink>
            <AniLink  cover bg="#f9f2b8" to="/blog/" className="navbar-item" activeStyle = {activeNavStyle}>
              Blog
            </AniLink>
            <AniLink cover bg="#f9f2b8" to="/teams/" className="navbar-item" activeStyle = {activeNavStyle}>
              Team
            </AniLink>
            <AniLink cover bg="#f9f2b8" to="/electrical/" className="navbar-item" activeStyle = {activeNavStyle}>
              Electrical
            </AniLink>
            <AniLink cover bg="#f9f2b8"  to="/mechanical/" className="navbar-item" activeStyle = {activeNavStyle}>
              Mechanical
            </AniLink>
            <AniLink cover bg="#f9f2b8" to="/sponsors/" className="navbar-item" activeStyle = {activeNavStyle}>
              Sponsors
            </AniLink>
          </div>
        </div>
      </nav>
    )
  }
}
