import React from "react"
import Helmet from "react-helmet"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

function Hello() {
  return (
    <Layout>
      <Helmet>
        <title>Documentation | NOStyleCSS</title>
      </Helmet>
      <div className="main height-100vh min-height-700 max-height-800">
        <div className="container max-width-1100">
          <h1 className="font-size-4xl text-primary mt-12 mb-12">Docs</h1>
          <h2 className="font-size-3xl text-green-400 mb-10">Why NOStyleCSS ?</h2>
          <p>NOStyleCSS gives your website a modern & asthetic look. You don't
            even need to leave your HTML, just add NOStyleCSS classes to your
            HTML element and NOStyleCSS will do all the work for you under the
            hood.</p>

            <h3 className="font-size-lg text-blue-400 mt-10 mb-6">Links</h3>
            <ul>
              <li>
                <Link to="/docs/getting-started" className="text-gray-200 my-5 my-5">
                  Installation
                </Link>
              </li>

              <li>
                <Link to="/docs/buttons" className="text-gray-200 my-5">
                  Buttons
                </Link>
              </li>

              <li>
                <Link to="/docs/forms" className="text-gray-200 my-5">
                  Forms
                </Link>
              </li>

              <li>
                <Link to="/docs/colors" className="text-gray-200 my-5">
                  Colors
                </Link>
              </li>

              <li>
                <Link to="/docs/font-stylings" className="text-gray-200 my-5">
                  Font stylings
                </Link>
              </li>

              <li>
                <Link to="/docs/margins" className="text-gray-200 my-5">
                  Margins
                </Link>
              </li>

              <li>
                <Link to="/docs/paddings" className="text-gray-200 my-5">
                  Paddings
                </Link>
              </li>

              <li>
                <Link to="/docs/heights" className="text-gray-200 my-5">
                  Heights
                </Link>
              </li>

              <li>
                <Link to="/docs/widths" className="text-gray-200 my-5">
                  Widths
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Hello
