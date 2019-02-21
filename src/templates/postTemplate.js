/*
Used as a template for all blog posts
*/

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function PostTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const blogStyle = {
    paddingTop: '20px',
  }
  const htmlStyle = {
    padding: '30px',
  }
  
  return (
    <>
      <SEO title={frontmatter.title} keywords={[`UCI`, `Solar`, `Car`]} />
      <div>
        <section className="section">
          <div className="container box">
            <h1 className="title is-1 has-text-centered" style={blogStyle}>
              {frontmatter.title}
            </h1>
            <h2 className="subtitle is-3 has-text-centered">{frontmatter.date}</h2>
            <div
              style={htmlStyle}
              className="content is-medium has-text-left"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
