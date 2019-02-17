import React from 'react'
import posed from 'react-pose'

import TeamMember from '../components/teammember'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = posed.div({
  enter: { staggerChildren: 50 },
})

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
})

const Electrical = () => (
  <Layout>
    <SEO title="Mechanical Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <Container>
        <section className="section">
          <div className="container">
            <h1 className="title">Mechanical Team</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The mechanical team is led by Thomas Slagle, a 2nd Year
                  Aerospace Engineering student. The mechanical team is divided
                  into five subdivisions: chassis, aerodynamics, suspension, steering, 
                  and human interface. Their mechanical team's goal is to design the moving
                  parts of an environmentally friendly car per race regulations that will
                  compete in the American Solar Challenge.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Chassis</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The chassis team in charge of the design of the main structural component 
                  of the vehicle. The chassis must be capable of withstanding 5g loads from all
                  directions, to keep the driver safe. The vehicle must be designed to
                  be completely street legal, while remaining lightweight and aerodynamic.
                </p>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Aerodynamics & Composition</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The aerodynamics team is responsible for the design of the
                  aerodynamic shell of the car and the ventilation systems that
                  cool the driver and battery. The subteam utilizes CAD and CFD.
                  The team must optimize the car's drag, to be as low as possible 
                  so that less enegry is needed to keep the car at speed. Additionally,
                  The shell must provide sufficient dirver visibility, enough solar panel
                  area, and conform to maximum dimensions in the rulebook.
                </p>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Suspension</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The suspension team is tasked with providing the driver with
                  proper contact, comfort, and control while driving. 
                  One of the most popular choices for solar car teams is the
                  double wishbone suspension system. The system must be 
                  Capable of withstanding a 2g bump, 1g brake, and 1g turn loading conditions
                  Since the car mostly encounter highway driving, the suspension is designed to be 
                  fairly stiff.
                </p>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Steering</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The steering team is responsible for the the mechanics of the
                  turning the car. Their job is to design and test the
                  system of linkages connected to the suspension uprights,
                  that make the wheels turn upon input from the driver -- through the steering wheel.
                  Currently, the design follows both ackermann and bump steer theories.
                </p>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Human Interface</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The human interface subteam considers how the driver interacts with the car.
                  They are responsible for the design of the dashboard mounts, steering wheel design,
                  and braking information. They take into account driver ergonomics and performance into their design.
                  As well, the subteam has to ensure the brake rotors can hold up to braking at speed.
                </p>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  </Layout>
)

export default Electrical
