import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer'
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
        <Navbar/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1080,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        className = "wrapper">
          {children}
        <div className="push"></div>
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
