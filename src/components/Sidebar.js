import React, { useState } from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

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

      className="flex-dir-col justify-content-center align-items-start"
    >
      <h3>
        <Link className="font-size-lg text-white" to="/docs">Docs</Link>
      </h3>
      <ul>
        {
          nodes.map(item => (
            <li key={item.frontmatter.slug}>
              <Link className="font-size-xs text-primary" to={"/docs" + item.frontmatter.slug}>
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