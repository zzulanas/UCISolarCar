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
            subteams: Battery, Motor Solar, and Telemetry. Their goal is to
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
                Our team is finishing off the design of the battery pack. This
                includes designing it in CAD programs and integrating it into the main electrical
                system. This is important because the battery will serve as the
                cars energy storage system. We
                are implementing 416 Li-ion Panasonic 18650 NCRBE's manufactured
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
                The motor team is doing power flow analysis based on the info
                that we currently have to create a race plan. One of the
                difficulties of these motors is the price point. Other motors are
                a lot less expensive but are too heavy/inefficient for our needs. The power
                flow analysis helps decide if switching to another motor
                would improve our performance.
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
                Currently we are working on communicating our telemetry with the
                Battery Management System. Up to this point, we have achieved
                communication via CAN bus, zigbee networks(one form of wireless
                communication protocol), and retrieving voltage/current data.
                Once we finish with the BMS system, we'll move onto transmitting
                our data via wifi, setting up a database and creating a user
                interface (possibly web app) where any of our team can log in
                and view the data of the car. We will also be implementing a
                camera to the car which will display to a small screen. We plan
                to make an app on that screen where the driver can also view the
                data of the car. The telemetry system is
                vital to the vehicle because it allows us to collect 
                data from different points of the car that we can analyze to improve performance.
                Many issues that could arise in an
                endurance race would not be noticed without proper telemetry systems.
              </p>
            </div>
            <div className="column" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">Solar Array</h1>
          <div className="columns">
            <div className="column">
              <p>
                Currently we are working on a test system to simulate power and
                collect data on how the solar array, motor and battery will
                interact with each other. This will allow us to understand how
                the power will flow from the array in to the motor and battery.
                This is important because we are not entirely sure how power
                will flow from the battery if the motor draws more power than
                the array is providing. The car will consist of 256 Sunpower
                Maxeon C60 bin kp solar cells (2 sub arrays with 128 cells each
                and sub array will be made of 7 modules).
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
