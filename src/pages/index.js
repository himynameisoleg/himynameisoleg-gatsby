import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Photo from "../components/photo"

export default ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="container">

          <div className="columns is-mobile is-centered mt-1">
            <Photo name="Photo-circle" />
          </div>
          <h1 className="title has-text-centered">Oleg Perchyk</h1>
          <h2 className="subtitle has-text-centered">
            I'm a software developer, life hacker and lover of geek culture. 
          </h2>

          <p className="has-text-centered">More <Link to="/about/">about me</Link>.</p>

          <hr />

          {/* TODO move articles box to its own component */}
          <div className="content box">
            <h3 className="has-text-weight-bold">
              {data.allMarkdownRemark.totalCount} Posts
            </h3>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <article
                className="post"
                style={{ marginBottom: "2em" }}
                key={node.id}
              >
                <Link to={node.fields.slug}>
                  <h4 className="has-text-weight-bold">
                    {node.frontmatter.title}{" "}
                  </h4>
                  <p>{node.frontmatter.date}</p>
                </Link>
                <div className="media">
                  <p>{node.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
