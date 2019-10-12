import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"

export default () => (
  <div>
    <Navbar />
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <Header headerText="Contact" />
          <a href="https://twitter.com/himynameisoleg">@himynameisoleg</a>
        </div>
      </div>
    </section>
  </div>
)
