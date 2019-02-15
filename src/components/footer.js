import React from 'react'
import {Link} from 'gatsby'

var style = {
  background: '#e1ebfc',
  borderTop: '1.5px solid #bfd6ff',
  textAlign: 'center',
  padding: '20px',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
}


function Footer({ children }) {
  return (
    <div>
      <div style={style}>
        {children}© {new Date().getFullYear()}, Built with
        {` ❤️ in Irvine `}
        <a href="https://www.instagram.com/uci_soleaters/"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  )
}

export default Footer
