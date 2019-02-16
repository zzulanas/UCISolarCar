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
                  into six subdivisions: aerodynamics, suspension, chassis, and
                  composition. Their goal is to design the mechanical system of
                  an environmentally friendly car per race regulations that will
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
                  Our chassis is designed to withstand 5g loads from all
                  directions, meaning – in other words – we can crash and be
                  completely fine! Everything about our car must be designed to
                  be completely street legal, while remaining lightweight and
                  aerodynamic. Our spaceframe chassis is made with 4130 chromoly
                  tubes designed to withstand 5g loads from all directions.
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
                  cool the driver and battery. Using Solidworks for CAD and
                  ANSYS for CFD, the aerodynamics team designs a shell that
                  provides sufficient driver visibility, solar panel area, and
                  conforms to the maximum dimensions specified in the
                  regulations. Simulations provide information on drag, drag
                  coefficients, and flow rates. The shell utilizes a sandwich
                  structure of fiberglass, layered around foam material, to
                  ensure the body will withstand a maximum 5g load impact.
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
                  proper contact, comfort, and control while driving. This has
                  been done in SolidWorks to design and simulate a double
                  wishbone suspension system, withstanding a 2g bump, 1g
                  braking, and 1g turn loading condition. The front wheel travel
                  is +/- 2.5 cm and the rear is +/- 1.89 cm. The front spring
                  rates are 150 lb/in and the rear are 400 lb/in. The control
                  arms will be made out of welded 4130 Chromoly steel. The
                  upright will be made out of CNC milled 6061 T6 aluminum. The
                  wheels and wheel hubs will be purchased from Mitsuba
                  Corporation.
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
                  The suspension team is tasked with providing the driver with
                  proper contact, comfort, and control while driving. This has
                  been done in SolidWorks to design and simulate a double
                  wishbone suspension system, withstanding a 2g bump, 1g
                  braking, and 1g turn loading condition. The front wheel travel
                  is +/- 2.5 cm and the rear is +/- 1.89 cm. The front spring
                  rates are 150 lb/in and the rear are 400 lb/in. The control
                  arms will be made out of welded 4130 Chromoly steel. The
                  upright will be made out of CNC milled 6061 T6 aluminum. The
                  wheels and wheel hubs will be purchased from Mitsuba
                  Corporation.
                </p>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Braking</h1>
            <div className="columns">
              <div className="column">
                <p>
                  The suspension team is tasked with providing the driver with
                  proper contact, comfort, and control while driving. This has
                  been done in SolidWorks to design and simulate a double
                  wishbone suspension system, withstanding a 2g bump, 1g
                  braking, and 1g turn loading condition. The front wheel travel
                  is +/- 2.5 cm and the rear is +/- 1.89 cm. The front spring
                  rates are 150 lb/in and the rear are 400 lb/in. The control
                  arms will be made out of welded 4130 Chromoly steel. The
                  upright will be made out of CNC milled 6061 T6 aluminum. The
                  wheels and wheel hubs will be purchased from Mitsuba
                  Corporation.
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
