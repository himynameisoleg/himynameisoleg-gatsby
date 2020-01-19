import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/#/">
            <Logo />
          </a>
          <a className="navbar-item" href="/#/">
            <div className="has-text-weight-bold">himynameisoleg</div>
          </a>
          <div
            role="button"
            onClick={this.handleClick}
            className={`navbar-burger ${
              this.state.isToggleOn ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          className={`navbar-menu ${this.state.isToggleOn ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link to="/" className="navbar-item" onClick={this.handleClick}>
              Home
            </Link>
            <Link
              to="/about/"
              className="navbar-item"
              onClick={this.handleClick}
            >
              About
            </Link>
            <Link
              to="/contact/"
              className="navbar-item"
              onClick={this.handleClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
