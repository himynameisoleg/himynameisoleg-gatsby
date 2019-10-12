import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"

export default () => (
  <div>
    <Navbar />
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <Header headerText="About" />
          <p>Hi my name is Oleg and im figuring out Gatsby.</p>
        </div>
      </div>
    </section>
  </div>
)
