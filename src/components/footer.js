import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>himynameisoleg.com</strong> by{" "}
            <a href="https://himynameisoleg.com">Oleg</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
          </p>
        </div>
      </footer>
    )
  }
}
