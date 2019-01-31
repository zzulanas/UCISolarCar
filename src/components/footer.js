import React from 'react'
import {Link} from 'gatsby'

var style = {
  backgroundColor: '#e1ebfc',
  borderTop: '1.5px solid #bfd6ff',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}© {new Date().getFullYear()}, Built with
        {` ❤️ in Irvine `}
        <a href="https://www.instagram.com/uci_soleaters/"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  )
}

export default Footer
