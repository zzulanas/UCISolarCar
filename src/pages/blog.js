import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import anime from 'animejs'
import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

const blogStyle = {
  padding: '20px',
}

export default function Blogs({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" keywords={[`UCI`, `Solar`, `Car`]} />
      <div className="blog-posts">
        <section className="section">
          <div className="container">
            <h1 class="title is-1 has-text-centered" id="page-title">Blog posts</h1>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="container box">
                  <div style={blogStyle} key={post.id}>
                    <Link to={post.frontmatter.path}>
                      <h1 className="title">{post.frontmatter.title}</h1>
                      <h2 className="subtitle">{post.frontmatter.date}</h2>
                    </Link>
                    <p>{post.excerpt}</p>
                  </div>
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
