import React from "react"
import Navbar from "./navbar"

export default ({ children }) => (
  <div>
    <Navbar />
    <section className="section" style={{marginTop: '20px'}}>
      <div className="columns is-centered">
        <div className="column is-8">{children}</div>
      </div>
    </section>
  </div>
)
