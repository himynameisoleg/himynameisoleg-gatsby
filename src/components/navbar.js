import React, { Component } from "react"
import { Link } from "gatsby"
import Photo from "./photo"
import Social from "./social"

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
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/#/">
            <Photo name="Logo-circle" />
          </a>
          <a className="navbar-item" href="/#/">
            <div className="has-text-weight-bold">himynameisoleg</div>
          </a>

          

          <div
            role="button"
            tabIndex="0"
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
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
          <div className="navbar-start">
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
            {/* <Link
              to="/contact/"
              className="navbar-item"
              onClick={this.handleClick}
            >
              Contact
            </Link> */}
            <Link
              to="/uses/"
              className="navbar-item"
              onClick={this.handleClick}
            >
              Uses
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item mt-2">
              <Social />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
