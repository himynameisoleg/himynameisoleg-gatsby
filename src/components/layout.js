import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

export default ({ children }) => (
  <div className="site-container">
    <Navbar />
    <section className="site-content section" style={{marginTop: '20px'}}>
      <div className="columns is-centered">
        <div className="column is-8">{children}</div>
      </div>
    </section>
    <Footer />
  </div>
)
