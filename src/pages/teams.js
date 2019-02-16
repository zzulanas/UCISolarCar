import React from 'react'
import posed from 'react-pose'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

const Teams = () => (
  <Layout>
    <SEO title="Our Team" keywords={[`UCI`, `Solar`, `Car`]} />
      <div>
        <Container>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Our Team</h1>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              diam in eros ultricies laoreet. Sed mattis ex et ante mattis, non
              scelerisque est eleifend. Aliquam eget dolor aliquam urna facilisis
              feugiat in eu orci. Pellentesque in mauris sed odio congue finibus
              quis eget metus. Curabitur sed elit tellus. Etiam sagittis arcu vel
              hendrerit porttitor. Sed id tellus venenatis, auctor odio eget,
              consequat neque. Praesent eu nisi id dui mollis auctor. Proin
              sollicitudin convallis facilisis. Suspendisse ut sem turpis.
          </P>
          </div>
        </section>
        </Container>
      </div>
  </Layout>
)

export default Teams
