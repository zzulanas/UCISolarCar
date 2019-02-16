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

const Teams = () => (
  <Layout>
    <SEO title="Our Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <Container>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Our Team</h1>
            <TeamMember imglink="https://previews.123rf.com/images/gstockstudio/gstockstudio1502/gstockstudio150200424/36811165-choosing-the-best-ingredient-for-his-meal-thoughtful-young-african-chef-in-white-uniform-holding-bro.jpg" />
          </div>
        </section>
      </Container>
    </div>
  </Layout>
)

export default Teams
