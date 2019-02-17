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
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Our Team</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
          <TeamMember name="Lizette Nguyen" description="Project Manager" imglink="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYnL-azcHgAhVFpoMKHWGdCeUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.canstockphoto.com%2Fbusinessman-ready-to-commit-suicide-8557263.html&psig=AOvVaw07IRl1betGffoKnk3GlrQW&ust=1550452627863020" />
          </div>
          <div className="column">
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <TeamMember name="Lizette Nguyen" description="Project Manager" imglink="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYnL-azcHgAhVFpoMKHWGdCeUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.canstockphoto.com%2Fbusinessman-ready-to-commit-suicide-8557263.html&psig=AOvVaw07IRl1betGffoKnk3GlrQW&ust=1550452627863020" />
          </div>
          <div className="column">
            <TeamMember />
          </div>
          <div className="column">
            <TeamMember />
          </div>
          <div className="column">
            <TeamMember />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Teams
