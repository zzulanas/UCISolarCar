/*
Used as a template for all blog posts
*/

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function PostTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const blogStyle = {
    paddingTop: '20px',
  };
  return (
    <Layout>
        <h1 className="title" style={blogStyle}>{frontmatter.title}</h1>
        <h2 className="subtitle">{frontmatter.date}</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
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