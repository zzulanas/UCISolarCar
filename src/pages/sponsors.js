import React from 'react'
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


const Sponsors = () => (
  <Layout>
    <SEO title="Sponsors" keywords={[`UCI`, `Solar`, `Car`]} />
    <Container>
      <div>
        <section className="section">
        <h1 className="title has-text-centered">Sponsors</h1>
          <div className="container box">
            
          </div>
        </section>
      </div>
    </Container>
  </Layout>
)

export default Sponsors
