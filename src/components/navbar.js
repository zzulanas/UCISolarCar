import React, { Component } from "react"
import { Link } from "gatsby" 
import logo from '../../static/favicon2.png'
import anime from 'animejs';

const logoStyle = {
  height: '28px', 
  width: '40px',
  padding: 'none'
}
export default class Navbar extends Component {
    render () {
      return (
        <nav className="navbar has-shadow" role="navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="./">
              <img style={logoStyle} src={logo} alt="UCI Solar Car"/>
            </Link>
          </div>
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="./blog/" className="navbar-item">Blog</Link>
            <Link to="./electrical/" className="navbar-item">Electrical</Link>
            <Link to="./mechanical/" className="navbar-item">Mechanical</Link>
            <Link to="./sponsors/" className="navbar-item">Sponsors</Link>
        </nav>
      );
    }
  }

