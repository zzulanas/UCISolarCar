import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'

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
    <SEO title="Electrical Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <section className="section">
        <div className="container">
          <h1 class="title">Electrical Team</h1>
          <p>
            The electrical team is led by Gilberto Garcia, a 4th year Electrical
            Engineering student. The electrical team is divided into four
            subteams: battery, motor, telemetry, and solar. Their goal is to
            design the electrical system of our car.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">Battery</h1>
          <div className="columns">
            <div className="column">
              <p>
                The battery team is responsible for the design of the vehicle's
                energy storage system. For this vehicle iteration, the vehicle
                will have an 5 kW battery composed of 416 Li ion 18650 cells.
                Each cell will be connected using state of the art wire bonding
                technology provided to us by our sponsor: Hesse Mechatronics. By
                working alongside the solar array, the battery pack will help
                the vehicle meet its energy needs.
              </p>
            </div>
            <div className="column" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">Motor</h1>
          <div className="columns">
            <div className="column">
              <p>
                Bringing it all together is the motor team. Responsible for the
                design of the powertrain, the motor team ensures that every bit
                of energy coming from the battery and solar array, is put to
                good use. By all means this is a rewarding task, as it means
                that the vehicle is prepped for its long journey.
              </p>
            </div>
            <div className="column" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">Telemetry</h1>
          <div className="columns">
            <div className="column">
              <p>
                The telemetry team is responsible for designing the vehicle's
                embedded systems. Like the nervous system on a human body, the
                vehicle's embedded systems will notify the crew and driver of
                any issue that may arise during operation. Furthermore, the
                embedded systems will provide real time data to monitor for and
                prevent any issue from arising in the first place. This data
                will also be used to help improve the design of future
                iterations of the vehicle.
              </p>
            </div>
            <div className="column" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">Solar</h1>
          <div className="columns">
            <div className="column">
              <p>
                The solar team is responsible for one most imporant, and
                characteristic, components of the car the solar array! The rest
                of the electrical team relies on the solar array. Without them,
                the car would be useless. The team must choose how many solar
                cells the car needs, what kind of solar cells the team should
                use, and how they should be laid out, to optimize efficiency.
              </p>
            </div>
            <div className="column" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Electrical
