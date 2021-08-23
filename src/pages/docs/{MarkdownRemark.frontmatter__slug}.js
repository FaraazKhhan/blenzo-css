import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { DocsLayout } from "../../components/DocsLayout"

function Template({ data }) {
  const title = data.markdownRemark.frontmatter.title
  const content = data.markdownRemark.html
  console.log(data)

  return (
    <Layout>
      <DocsLayout>
        <Helmet>
          <title>{title} | NOStyleCSS</title>
        </Helmet>
        <div className="main height-100vh min-height-700 max-height-800">
          <div className="container max-width-1100">
            <h1 className="font-size-3xl text-green-400 mt-15 mb-10">{title}</h1>
            <div
            dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </DocsLayout>
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
