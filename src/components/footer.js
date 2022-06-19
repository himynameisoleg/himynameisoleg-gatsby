import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>&copy; {(new Date().getFullYear())} {" himynameisoleg"}</strong>
          </p>
          <p>Powered by <a href="https://gatsbyjs.com">Gatsby</a> and <a href="https://bulma.io/">Bulma</a>.</p>
        </div>
      </footer>
    )
  }
}
