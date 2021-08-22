import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

function Template({ data }) {
  const title = data.markdownRemark.frontmatter.title
  const content = data.markdownRemark.html
  console.log(data)

  return (
    <Layout>
      <Helmet>
        <title>title | NOStyleCSS</title>
      </Helmet>
      <div className="main height-100vh min-height-700 max-height-800">
        <div className="container max-width-1100">
          <h1 className="font-size-4xl text-primary mt-12 mb-12">Docs</h1>
          <h2 className="font-size-3xl text-yellow-400 mb-10">title</h2>
          <p>content</p>
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
