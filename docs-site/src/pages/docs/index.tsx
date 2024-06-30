import React from "react"
import Layout from "../../components/Layout"
import { DocsLayout } from "../../components/DocsLayout"
import { HeadFC } from "gatsby"

function Docs() {
  return (
    <Layout>
      <DocsLayout>
        <div className="height-100vh min-height-700 max-height-800">
          <div className="container max-width-1100">
            <h1 className="font-size-3xl text-primary mt-12 mb-12">Docs</h1>
            <h2 className="font-size-4xl text-green-400 mb-10">Why NOStyleCSS ?</h2>
            <p>NOStyleCSS gives your website a modern & asthetic look. You don't
              even need to leave your HTML, just add NOStyleCSS classes to your
              HTML element and NOStyleCSS will do all the work for you under the
              hood.
            </p>
          </div>
        </div>
      </DocsLayout>
    </Layout>
  )
}

export default Docs

export const Head: HeadFC<any> = () => (
  <>
    <title>Documentation | NOStyleCSS</title>
  </>
)
