import React from 'react'
import {Link} from 'gatsby'
import Linkedin from './linkedin'
import Instagram from './instagram'
import Facebook from './facebook';


var style = {
  background: '#e1ebfc',
  borderTop: '1.5px solid #bfd6ff',
  textAlign: 'center',
  padding: '20px',
  left: '0',
  bottom: '0',
  height: '100px',
  width: '100%',
}

const style2 = {
  display: 'inline-block',
  padding: '10px',
}


function Footer({ children }) {
  return (
    <div>
      <div style={style}>
        {children}© {new Date().getFullYear()}, Built with
        {` ❤️ in Irvine `}
        <div>
        <div style={style2} ><Instagram userlink="https://www.instagram.com/uci_soleaters/"/></div>
        <div style={style2}><Linkedin userlink="https://www.linkedin.com/company/uci-solar-car/about/"/></div>
        <div style={style2}><Facebook  userlink="https://www.facebook.com/UC-Irvine-Solar-Car-Team-866371140182782/?__tn__=%2Cd%2CP-R&amp;eid=ARAmw3RvC_6X44gKwJVrn9BadszXupdf2vn4xPQVwzgmpTDwbRnyu5jNxt7UjbrxiPhmsNHspY_5LDtU"/></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
