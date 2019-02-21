import React from 'react'
import posed from 'react-pose'

import Layout from '../components/layout'
import SEO from '../components/seo'
import msc from '../../static/msc_logo.png'
import airwolf from '../../static/airwolf.png'
import altair from '../../static/altairlogo.png'
import battsystems from '../../static/batterysystems.png'
import greeninit from '../../static/greeninit.jpg'
import hesse from '../../static/hessemechatronics_logo_jpg.jpg'
import IMS from '../../static/IMS_Logo.jpg'
import marvin from '../../static/MarvinTestSolutionsNewLogo.jpg'
import pedego from '../../static/pedego-logo.svg'
import sullivan from '../../static/Sullivan-Solar-Logo.jpeg'
import urop from '../../static/urop.png'
import sponsorpacket from '../../static/Energy_Invitational_Canva_2.0.pdf'

const Container = posed.div({
  enter: { staggerChildren: 50 },
})

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
})

const platStyle={
  backgroundColor: "#e5e4e2"
}

const goldStyle={
  backgroundColor: "rgb(255,215,0)"
}

const silverStyle={
  backgroundColor: "#C0C0C0"
}

const bronzeStyle={
  backgroundColor: "#CD7F32"
}

const smallimage = {
  paddingTop:'30px'
}

const Sponsors = () => (
  <>
    <SEO title="Sponsors" keywords={[`UCI`, `Solar`, `Car`]} />
    <Container>
      <div>
        <section className="section">
        <h1 className="title has-text-centered">Sponsors</h1>
        <h2 className="subtitle has-text-centered">Thanks so much for your support!</h2>
          <div className="container box">
            <h1 style={platStyle} className="title is-4 has-text-centered">Platinum Tier</h1>
            <div className="section">
            <div className="columns">
            <div className="column"><a href="http://www.mscsoftware.com/"><img src={msc}/></a></div>
            <div className="column"><a href="https://www.altair.com/"><img src={altair}/></a></div>
            </div>
            </div>
            <div className="section">
            <h1 style={goldStyle} className="title is-4 has-text-centered">Gold Tier</h1>
            <div className="columns">
            <div className="column"></div>
            <div className="column"><a href="https://airwolf3d.com/"><img style={smallimage} src={airwolf}/></a></div>
            <div className="column"></div>
            </div>
            </div>
            <div className="section">
            <h1 style={silverStyle} className="title is-4 has-text-centered">Silver Tier</h1>
            <div className="columns">
            <div className="column"><a href="https://www.sullivansolarpower.com/"><img style={smallimage} src={sullivan}/></a></div>
            <div className="column"><a href="https://tgif.asuci.uci.edu/"><img  src={greeninit}/></a></div>
            <div className="column"><a href="https://www.batterysystems.net/"><img  src={battsystems}/></a></div>
            <div className="column"><a href="https://www.hesse-mechatronics.com/en/"><img  src={hesse}/></a></div>
            </div>
            </div>
            <div className="section">
            <h1 style={bronzeStyle} className="title is-4 has-text-centered">Bronze Tier</h1>
            <div className="columns">
            <div className="column"><a href="https://www.urop.uci.edu/"><img src={urop}/></a></div>
            <div className="column"><a href="https://www.industrialmetalsupply.com/"><img  src={IMS}/></a></div>
            <div className="column"><a href="http://www.marvintest.com/"><img  src={marvin}/></a></div>
            <div className="column"><a href="https://www.pedegoelectricbikes.com/"><img  src={pedego}/></a></div>
            </div>
            </div>
          </div>
          <div className=" container box">
          <h1 className="title has-text-centered">Interested in Sponsoring us?</h1>
          <div className="columns">
          <div className="column"/>
          <div className="column"><a download href={sponsorpacket} className="button is-success">Download our sponsorship packet!</a></div>
            <div className="column"><a href="https://zotfunder.give.uci.edu/project/10863" className="button is-info">Check out our ZotFunder!</a></div>
            <div className="column"/>
            </div>
          </div>
        </section>
      </div>
    </Container>
  </>
)

export default Sponsors
