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
            The electrical team is led by Gilberto Garcia, a 3rd year Electrical
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
                The battery team is responsible for the design of the battery pack. This
                includes a CAD model and integration into the main electrical
                system. The battery will serve as the car's energy storage system. We
                are implementing 416 Li-ion Panasonic 18650 NCRBE's, manufactured
                using wire bonding to ensure proper connections.
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
                The motor team is tasked with determining which motors to use for the car.
                There are several options, so the subteam must do a very indepth trade study, 
                constantly updating it with the changing needs of the rest of the team. Weight,
                price, power draw, output, among other things are heavily considered in the final choice.
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
                The telemetry team works on design the systems of sesors, microcomputers, and 
                other electrical components to read and record vital information about the car, 
                in real time. Some important pieces of data to record are speed, position, battery
                percentage, solar efficiency, motor output, and other things. During the race, many issues
                could arrise however, the telemetry team helps in notifiy both the driver and the team.
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
                The solar team is responsible for one most imporant, and characteristic, components of the car
                the solar array! The rest of the electrical team relies on the solar array. Without them, the 
                car would be useless. The team must choose how many solar cells the car needs, what kind of 
                solar cells the team should use, and how they should be laid out, to optimize efficiency.
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
