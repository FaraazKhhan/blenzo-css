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
            : Your free and open-source CSS framework for rapid development.
          </p>
          <h2 className="font-size-4xl line-height-2x mb-10 text-primary font-weight-bold">
            Effortlessly Build Beautiful Websites with NOStyle
          </h2>
          <p className="text-gray max-width-800 mb-10">
            Quickly build responsive layouts and modern websites without writing extensive CSS
            <ul className="mt-2 flex justify-content-space-around">
              <li>Easy to Learn & Use</li>
              <li>Customizable & Extensible</li>
              <li>Community Driven</li>
            </ul>
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
