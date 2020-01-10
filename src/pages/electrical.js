import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'

import Layout from '../components/layout'
import SEO from '../components/seo'
import  battery  from "../../static/Electrical/batterysquare.jpg"
import  motor  from "../../static/Electrical/motor.png";
import  solar  from "../../static/Electrical/solarsquare.jpg";
import  telemetry  from "../../static/Electrical/telemetry.png";


const Container = posed.div({
  enter: { staggerChildren: 50 },
})

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
})

const imagestyle ={
  width: '80%',
  borderRadius: '10px',
}

const rightStyle = {
  textAlign: 'right',
}

const center = {
  paddingLeft: '40px'
}
const Electrical = () => (
  <>
    <SEO title="Electrical Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Electrical Team</h1>
          <p>
            The Electrical team is divided into four subteams: 
            Battery, Motor, Telemetry, and Solar. The teams work
            closely together to design and test the electrical 
            system which will harness sun energy to power the car. 
          </p>
        </div>
      </section>
        <div className="container box">
          <h1 className="title is-3">Battery</h1>
          <div className="columns">
            <div className="column">
              <p className="content is-medium">
                The Battery team is responsible for the design of the vehicle's
                energy storage system. For this vehicle iteration, the vehicle
                will have a 5 kW battery composed of 416 Li ion 18650 cells.
                Each cell will be connected using state of the art wire bonding
                technology provided to us by our sponsor, Hesse Mechatronics. By
                working alongside the solar array, the battery pack will help
                the vehicle generate power for the car's operation.
              </p>
            </div>
            <div className="column">
            <img src={battery}/>
            </div>
          </div>
        </div>
        <div className="container box">
          <h1 style={rightStyle} className="title is-3">Motor</h1>
          <div className="columns">
            <div className="column">
            <img src={motor}/>
            </div>
            <div className="column">
              <p className="content is-medium">
                Tying it all together is the Motor team. Responsible for the
                design of the powertrain, the Motor team ensures that every bit
                of energy coming from the battery and solar array is put to
                good use. By all means this is a rewarding task, as it means
                that the vehicle is prepped for its long journey.
              </p>
            </div>
          </div>
        </div>
        <div className="container box">
          <h1 className="title is-3">Telemetry</h1>
          <div className="columns">
            <div className="column">
              <p className="content is-medium">
                The Telemetry team is responsible for designing the vehicle's
                embedded systems. Like the nervous system on a human body, the
                vehicle's embedded systems will notify the crew and driver of
                any issue that may arise during operation. Furthermore, the
                embedded systems will provide real time data to monitor for
                any arising issues. This data will also be used to prevent 
                issues in future iterations of the vehicle.
              </p>
            </div>
            <div className="column">
            <img src={telemetry}/>
            </div>
          </div>
        </div>
        <div className="container box">
          <h1 style={rightStyle} className="title is-3">Solar</h1>
          <div className="columns">
          <div className="column">
            <img src={solar}/>
          </div>
            <div className="column is-two-thirds">
              <p className="content is-medium">
                Lying at the heart of it all is the Solar team. Their job is to
                design and manufacture the vehicle's main source of energy: the
                solar array. Under optimal conditions, the solar array will
                drive the vehicle's motors with roughly 900 Watts. That's about
                as much power as that used by hair dryer! Making sure that the
                vehicle has the energy it needs is not an easy task, but our
                solar team has taken on this challenge anyways!
              </p>
            </div>
          </div>
        </div>
    </div>
  </>
)

export default Electrical
