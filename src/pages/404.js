import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageTransition>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageTransition>
  </Layout>
)

export default NotFoundPage
