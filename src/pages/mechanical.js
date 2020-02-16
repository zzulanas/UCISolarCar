import React from 'react'
import posed from 'react-pose'

import TeamMember from '../components/teammember'
import Layout from '../components/layout'
import SEO from '../components/seo'
import aero from '../../static/Mechanical/aero sim.jpg';
import braking from '../../static/Mechanical/braking.png';
import chassis from '../../static/Mechanical/chassis sims.jpg';
import suspension from '../../static/Mechanical/suspension square.jpg';

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

const Electrical = () => (
  <>
    <SEO title="Mechanical Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <Container>
        <section className="section">
          <div className="container">
            <h1 className="title is-1">Mechanical Team</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The Mechanical team is composed of four subteams: Chassis, 
                  Aerodynamics, Suspension, and Human Interface. Together, 
                  the mechanical team designs, simulates, and manufactures  
                  the moving parts of the car, being sure to ensure design integration.
                </p>
              </div>
            </div>
          </div>
        </section>
          <div className="container box">
            <h1 className="title is-3">Chassis</h1>
            <div className="columns">
              <div className="column">
                <p className="content is-medium">
                  The Chassis team in charge of the design of the main structural component 
                  of the vehicle. The chassis must be capable of withstanding 5g loads from all
                  directions in order to keep the driver safe. In addition to remaining lightweight
                  and aerodynamic, it must also provide space for all components necessary for the car.
                </p>
              </div>
              <div className="column">
                <img src={chassis}/>
              </div>
            </div>
          </div>
          <div className="container box">
            <h1 style={rightStyle} className="title is-3">Aerodynamics</h1>
            <div className="columns">
              <div className="column">
                <img src={aero}/>
              </div>
              <div className="column is-one-half">
                <p className="content is-medium">
                  The Aerodynamics team is responsible for the design of the
                  aerodynamic shell of the car and the ventilation systems that
                  cool the driver and battery. The subteam utilizes CAD and CFD
                  to optimize the car's drag to be as low as possible so that 
                  less energy is needed to keep the car rolling. Additionally,
                  the shell must provide sufficient driver visibility, enough solar panel
                  area, and conform to maximum dimensions in the rulebook.
                </p>
              </div>
            </div>
          </div>
          <div className="container box">
            <h1 className="title is-3">Suspension</h1>
            <div className="columns">
              <div className="column">
                <p className="content is-medium">
                  The Suspension team is tasked with providing the driver with
                  proper contact, comfort, and control while driving. 
                  One of the most popular choices for solar car teams is the
                  double wishbone suspension system. The system must be 
                  Capable of withstanding a 2g bump, 1g brake, and 1g turn loading conditions
                  Since the car mostly encounter highway driving, the suspension is designed to be 
                  fairly stiff.
                </p>
              </div>
              <div className="column">
                <img src={suspension}/>
              </div>
            </div>
          </div>
          <div className="container box">
            <h1 className="title is-3">Human Interface</h1>
            <div className="columns">
              <div className="column">
                <p className="content is-medium">
                  The human interface subteam considers how the driver interacts with the car.
                  They are responsible for the design of the dashboard mounts, steering wheel design,
                  and braking information. They take into account driver ergonomics and performance into their design.
                  As well, the subteam has to ensure the brake rotors can hold up to braking at speed.
                </p>
              </div>
              <div className="column">
                <img src={braking}/>
              </div>
            </div>
          </div>
      </Container>
    </div>
  </>
)

export default Electrical
