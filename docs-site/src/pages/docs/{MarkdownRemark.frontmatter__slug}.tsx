import React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { DocsLayout } from "../../components/DocsLayout"

const Template: React.FC<PageProps<any>> = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const content = data.markdownRemark.html

  return (
    <Layout>
      <DocsLayout>
        <div className="height-100vh min-height-700 max-height-800">
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

export const Head: HeadFC<any> = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const content = data.markdownRemark.html
  console.debug(data)

  return(
  <>
    <title>About | NOStyleCSS</title>
  </>
)}

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
