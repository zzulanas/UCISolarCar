import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'


import team_pic from '../../static/team_pic.png'
import grandprix from '../../static/grandprix.jpg'
import car from '../../static/car.jpg'
import SEO from '../components/seo'

const Section = posed.section({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
})

const rightTitleStyle = {
  float: 'right',
}

const mainTitleStyle = {
  fontSize: '500%',
}


const Home = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`UCI`, `Solar`, `Car`]} />
    <div className="stack">
      <section className="section is-medium">
        <div className="container">
          <h1 className="title is-1" style={mainTitleStyle}>
            <i>
              <strong>We are UCI Solar Car</strong>
            </i>
          </h1>
          <div className="columns">
            <div className="column is-one-third">
              <Section>
                <P className="content is-medium">
                  Driven by the aspiration of building a solar car, a group of
                  mechanical and electrical engineering students assembled in
                  late 2016, starting the SolEaters team at UCI. The team
                  officially started in March 2017 after receiving professional
                  advisement from professors and mentors
                </P>
              </Section>
            </div>
            <div className="column is-two-thirds">
              <P>
                <img src={team_pic} alt="Picture of the Team" />
              </P>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              "We do not plan on just racing and showing up, but being as
              competitively viable as possible, our goal is to make an
              everlasting mark on the race."
            </h1>
            <h2 className="subtitle">-Thomas Slagle, Mechanical Lead</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">The Race</h1>
          <div className="columns">
            <div className="column is-two-thirds">
              <img src={grandprix} alt="Picture of the race" />
            </div>
            <div className="column is-one-third">
              <P className="content is-medium">
                Our team contains thirty two students from majors all across the
                board. We're currently aiming to compete in the 2020 Formula Sun
                Grand Prix. We will design and build a functional solar car that
                complies with Formula Sun Grand Prix regulations. We do not plan
                on just racing and showing up, but being as competitively viable
                as possible, our goal is to make an everlasting mark on the
                race.
              </P>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third" />
            <div className="column is-two-thirds">
              <h1 className="title is-3" style={rightTitleStyle}>
                The Car
              </h1>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <P className="content is-medium">
                Our entire car, with all components and driver included, weighs
                in at around 500 pounds. With our lightweight body and
                aerodynamic shape, we will be able to drive halfway across the
                country on only the power of the sun.
              </P>
            </div>
            <div className="column is-two-thirds">
              <img src={car} alt="Picture of the car" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
)
/*
export const pageQuery = graphql`
  query IndexQuery {

  }
`
*/
export default Home
