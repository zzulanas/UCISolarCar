import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'
import favicon from '../../static/favicon1.png'
import '../css/bulma.css'
import '../css/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="Site">
          <Helmet>
            <meta name="description" />
            <link rel="shortcut icon" type="image/png" href={favicon} />
          </Helmet>
          <Navbar />
          <div className="Site-content">
            {children}
            <div className="push" />
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
