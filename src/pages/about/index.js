import React from "react"
import Helmet from "react-helmet"
import Layout from "../../components/Layout"

function About() {
  return (
    <Layout>
      <Helmet>
        <title>About | NOStyleCSS</title>
      </Helmet>
      <div className="main height-100vh min-height-700 max-height-800">
        <div className="container max-width-1100">
          <h1 className="font-size-4xl text-primary mt-12 mb-12">About the creator</h1>

          <h2 className="font-size-3xl font-weight-bold text-gray-100 mb-6">My name is 
            <span className="text-danger ml-4">
                Faraaz Khhan
            </span>
          </h2>
            <p>I am a front-end developer and a computer science Engineer.</p>
          </div>
      </div>
    </Layout>
  )
}

export default About