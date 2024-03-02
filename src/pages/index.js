import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {
  const title = data.site.siteMetadata.title
  const desc = data.site.siteMetadata.desc

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>
      <main className="main flex height-100vh min-height-700 max-height-800">
        <div className="container max-width-1100">
          <p className="mb-10">
            <span className="russo-one-regular">
              <span className="text-primary">NO</span>
              <span>Style</span>::
              <span className="text-gray">CSS</span>
            </span>
            : Free, open-source CSS framework.
          </p>
          <h2 className="font-size-4xl line-height-2x mb-10 text-primary font-weight-bold">
            Build your website faster without having zero experience of CSS.
          </h2>
          <p className="text-gray max-width-800 mb-10">
            NOStyleCSS gives your website a modern & asthetic look. You don't
            even need to leave your HTML, just add NOStyleCSS classes to your
            HTML element and NOStyleCSS will do all the work for you under the
            hood.
          </p>

          <Link to="/docs" className="btn btn-secondary border-rounded-4x mt-2">
            Get started
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`
