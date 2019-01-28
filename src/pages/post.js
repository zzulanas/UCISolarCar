import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const PostTemplate = () => (
  <Layout>
    <h1>Test</h1>
    <p>Ah!</p>
  </Layout>
)

export default PostTemplate
{/*
export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
      title
      content
      date
    }
  }
`
*/}