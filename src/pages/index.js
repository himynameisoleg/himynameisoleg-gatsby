import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="container">
          <Header headerText="Welcome to my BrainDump" />
          <h2 className="subtitle">What a world.</h2>
          <div className="section">
            <h2 className="subtitle">News:</h2>
            <p>Just implemented graphql markdown transformer.</p>
          </div>
          <div className="section">
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h3>
                    {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
                  </h3>
                </Link>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}
export const query = graphql`
         query {
           allMarkdownRemark {
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
