import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby';

const blogStyle = {
  padding: '20px'
};
const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`UCI`, `Solar`, `Car`]} />
    <div>
      <section className="section">
        <div className="container">
          <h1 class="title">Blog posts</h1>


          {/*<ul>
            {data.allStrapiPost.edges.map(document => (
              <Link to={`/${document.node.id}`}>
              <li key={document.node.id} style={blogStyle}>
                <h1 className="title">
                  {document.node.title}
                </h1>
                <h2 className="subtitle">
                  {document.node.date}
                </h2>
                <Img className="image" fixed={document.node.cover.childImageSharp.fixed}/>
                <div className="content">
                  <p>{document.node.content}</p>
                </div>
              </li>
              </Link>
            ))}
          </ul>*/}
        </div>
      </section>
    </div>
  </Layout>
)

export default BlogPage


{/*
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost(
      sort: { fields: [date], order:DESC}
    ) {
      edges {
        node {
          id
          cover {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }`
  */}
