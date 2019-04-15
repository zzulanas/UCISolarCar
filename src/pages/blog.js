import React from 'react'


import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Link from 'gatsby-plugin-transition-link'


const blogStyle = {
  padding: '20px',
}


export default function Blogs({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <>
      <SEO title="Blog" keywords={[`UCI`, `Solar`, `Car`]} />
      <div className="blog-posts">
        <section className="section">
          <div className="container">
            <h1 className="title is-1 has-text-centered" id="page-title">
              Blog posts
            </h1>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <AniLink cover bg="#f9f2b8" style={blogStyle} to={post.frontmatter.path}>
                    <div className="box">
                        <h1 className="title">{post.frontmatter.title}</h1>
                        <h2 className="subtitle">{post.frontmatter.date}</h2>

                    </div>
                  </AniLink>
                )
              })}
          </div>
        </section>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            title
            path
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`
