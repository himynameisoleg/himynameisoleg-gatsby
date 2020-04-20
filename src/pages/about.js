import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <div>
    <Layout>
      <Header headerText="About Me" />
      <p>Hi my name is Oleg and I am a developer from Chicago.</p>
      <p>
        This site was built using <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </p>
    </Layout>
  </div>
)
