import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import SEO from '../components/seo'

const ElectricalPage = () => (
  <Layout>
    <SEO title="Electrical Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <section className="section">
        <div className="container">
          <h1 class="title">Electrical Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            diam in eros ultricies laoreet. Sed mattis ex et ante mattis, non
            scelerisque est eleifend. Aliquam eget dolor aliquam urna facilisis
            feugiat in eu orci. Pellentesque in mauris sed odio congue finibus
            quis eget metus. Curabitur sed elit tellus. Etiam sagittis arcu vel
            hendrerit porttitor. Sed id tellus venenatis, auctor odio eget,
            consequat neque. Praesent eu nisi id dui mollis auctor. Proin
            sollicitudin convallis facilisis. Suspendisse ut sem turpis.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          Suspendisse rutrum, nisl et volutpat tempus, lectus turpis consectetur
          nisl, a elementum eros enim ac sapien. Donec sapien ante, scelerisque
          in mauris nec, mollis tempus risus. Donec nec fermentum metus, sit
          amet porttitor turpis. Curabitur scelerisque a lacus eget facilisis.
          Quisque cursus, elit sed sagittis sollicitudin, diam lorem porta
          turpis, at gravida augue nulla id metus. Sed porttitor nisl id sapien
          auctor, efficitur placerat neque gravida. Nam sodales lorem arcu, ac
          molestie libero lobortis sed. Integer lobortis venenatis blandit.
          Nulla quis nulla risus.
        </div>
      </section>
    </div>
  </Layout>
)

export default ElectricalPage
