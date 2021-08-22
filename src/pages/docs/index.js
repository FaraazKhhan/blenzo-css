import React from "react"
import Helmet from "react-helmet"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"

function Hello({ data }) {
  const title = data.markdownRemark.frontmatter.title
  const content = data.markdownRemark.html

  return (
    <Layout>
      <Helmet>
        <title>Documentation | NOStyleCSS</title>
      </Helmet>
      <div className="main height-100vh min-height-700 max-height-800">
        <div className="container max-width-1100">
          <h1 className="font-size-4xl text-primary mt-12 mb-12">Docs</h1>
          {/* <h2 className="font-size-3xl text-yellow-400 mb-10">{title}</h2> */}
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        <Link to="/docs/getting-started" className="btn btn-secondary border-rounded-4x mt-2">
            Installation
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Hello

export const query = graphql`
  query MarkDown {
    markdownRemark {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
