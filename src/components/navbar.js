import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../static/favicon2.png'
import anime from 'animejs'

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
