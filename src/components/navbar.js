import React from "react"
import { Link } from "gatsby" 
import Img from 'gatsby-image'
import logo from '../../static/favicon1.png'
import anime from 'animejs';

const Navbar= () => ({
    render: function() {
      return (
        <nav className="navbar has-shadow" role="navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="./">
              <Img fixed={logo}/>
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
  });

export default Navbar