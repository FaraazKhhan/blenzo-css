import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

function Sidebar() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  const [nodes] = useState(data.allMarkdownRemark.nodes)

  return (
    <nav
      style={{
        height: "100vh",
        minHeight: "700px",
        width: "30%",
        maxWidth: "300px",
      }}

      className="flex-dir-col justify-content-start align-items-start py-5"
    >
      <h3 className="font-size-lg text-gray-900 no-decoration">
        Docs
      </h3>
      <ul>
        {
          nodes.map(item => (
            <li key={item.frontmatter.slug} className="list-style-none">
              <Link className="font-size-xs text-pink-400 no-decoration" to={"/docs" + item.frontmatter.slug}>
                {item.frontmatter.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Sidebar