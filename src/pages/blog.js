import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import anime from 'animejs'

const blogStyle = {
  padding: '20px',
}

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" keywords={[`UCI`, `Solar`, `Car`]} />
      <div className="blog-posts">
        <section className="section">
          <div className="container">
            <h1 class="title" id="page-title">Blog posts</h1>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <Link to={post.frontmatter.path}>
                      <h1 className="title">{post.frontmatter.title}</h1>
                      <h2 className="subtitle">{post.frontmatter.date}</h2>
                    </Link>
                    <p>{post.excerpt}</p>
                  </div>
                )
              })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
