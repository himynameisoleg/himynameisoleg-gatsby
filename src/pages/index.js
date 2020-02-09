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
          <div className="content box">
            <h3 className="has-text-weight-bold">{data.allMarkdownRemark.totalCount} Posts</h3>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <article className="post" style={{margin: "0 0 20px 0"}} key={node.id}>
                <Link to={node.fields.slug}>
                  <h4 className="has-text-weight-bold">
                    {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
                  </h4>
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
