import React, { Component } from 'react'
import Img from 'gatsby-image'
import posed, { PoseGroup } from 'react-pose'
import { Router, Link, Location } from '@reach/router'

import team_pic from '../../static/team_pic.png'
import grandprix from '../../static/grandprix.jpg'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Section = posed.section({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
})

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`UCI`, `Solar`, `Car`]} />
    <div className="stack">
      <Section>
        <section className="section">
          <div className="container">
            <h1 className="title is-1">
              <i>
                <strong>We are UCI Solar Car</strong>
              </i>
            </h1>
            <div className="columns">
              <div className="column is-one-third">
                <P className="subtitle is-4">
                  Driven by the aspiration of building a solar car, a group of
                  mechanical and electrical engineering students assembled in
                  late 2016, starting the SolEaters team at UCI. The team
                  officially started in March 2017 after receiving professional
                  advisement from professors and mentors.
                </P>
              </div>
              <div className="column is-two-thirds">
                <P>
                  <img src={team_pic} />
                </P>
              </div>
            </div>
          </div>
        </section>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                "We do not plan on just racing and showing up, but being as
                competitively viable as possible, our goal is to make an
                everlasting mark on the race."
              </h1>
              <h2 class="subtitle">-Thomas Slagle, Mechanical Lead</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
          <h1 className="title is-3">The Race</h1>
            <div className="columns">
            <div className="column is-two-thirds">
            <img src={grandprix}/>
            </div>
            <div className="column is-one-third">
            <P>
              Our team contains thirty two students from
              majors all across the board. We're currently aiming to compete in
              the 2020 Formula Sun Grand Prix. We will design and build a
              functional solar car that complies with Formula Sun Grand Prix
              regulations. We do not plan on just racing and showing up, but
              being as competitively viable as possible, our goal is to make an
              everlasting mark on the race.
            </P>
            </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            Suspendisse rutrum, nisl et volutpat tempus, lectus turpis
            consectetur nisl, a elementum eros enim ac sapien. Donec sapien
            ante, scelerisque in mauris nec, mollis tempus risus. Donec nec
            fermentum metus, sit amet porttitor turpis. Curabitur scelerisque a
            lacus eget facilisis. Quisque cursus, elit sed sagittis
            sollicitudin, diam lorem porta turpis, at gravida augue nulla id
            metus. Sed porttitor nisl id sapien auctor, efficitur placerat neque
            gravida. Nam sodales lorem arcu, ac molestie libero lobortis sed.
            Integer lobortis venenatis blandit. Nulla quis nulla risus.
          </div>
        </section>
        <section className="section">
          <div className="container">
            Suspendisse rutrum, nisl et volutpat tempus, lectus turpis
            consectetur nisl, a elementum eros enim ac sapien. Donec sapien
            ante, scelerisque in mauris nec, mollis tempus risus. Donec nec
            fermentum metus, sit amet porttitor turpis. Curabitur scelerisque a
            lacus eget facilisis. Quisque cursus, elit sed sagittis
            sollicitudin, diam lorem porta turpis, at gravida augue nulla id
            metus. Sed porttitor nisl id sapien auctor, efficitur placerat neque
            gravida. Nam sodales lorem arcu, ac molestie libero lobortis sed.
            Integer lobortis venenatis blandit. Nulla quis nulla risus.
          </div>
        </section>
        <section className="section">
          <div className="container">
            Suspendisse rutrum, nisl et volutpat tempus, lectus turpis
            consectetur nisl, a elementum eros enim ac sapien. Donec sapien
            ante, scelerisque in mauris nec, mollis tempus risus. Donec nec
            fermentum metus, sit amet porttitor turpis. Curabitur scelerisque a
            lacus eget facilisis. Quisque cursus, elit sed sagittis
            sollicitudin, diam lorem porta turpis, at gravida augue nulla id
            metus. Sed porttitor nisl id sapien auctor, efficitur placerat neque
            gravida. Nam sodales lorem arcu, ac molestie libero lobortis sed.
            Integer lobortis venenatis blandit. Nulla quis nulla risus.
          </div>
        </section>
        <section className="section">
          <div className="container">
            Suspendisse rutrum, nisl et volutpat tempus, lectus turpis
            consectetur nisl, a elementum eros enim ac sapien. Donec sapien
            ante, scelerisque in mauris nec, mollis tempus risus. Donec nec
            fermentum metus, sit amet porttitor turpis. Curabitur scelerisque a
            lacus eget facilisis. Quisque cursus, elit sed sagittis
            sollicitudin, diam lorem porta turpis, at gravida augue nulla id
            metus. Sed porttitor nisl id sapien auctor, efficitur placerat neque
            gravida. Nam sodales lorem arcu, ac molestie libero lobortis sed.
            Integer lobortis venenatis blandit. Nulla quis nulla risus.
          </div>
        </section>
      </Section>
    </div>
  </Layout>
)
/*
export const pageQuery = graphql`
  query IndexQuery {

  }
`
*/
export default IndexPage
