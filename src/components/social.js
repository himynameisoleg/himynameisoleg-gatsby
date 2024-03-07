import React, { Component } from "react"
import GithubIcon from "../images/assets/github_icon.svg"
import LinkedinIcon from "../images/assets/linkedin_icon.svg"
// import TwitterIcon from "../images/assets/twitterx_icon.svg"
import InstagramIcon from "../images/assets/instagram_icon.svg"

export default class Social extends Component {
  render() {
    return (
      <div>
        <a href="https://github.com/himynameisoleg" target="_blank" rel="noreferrer">
          <GithubIcon className="mr-3" />
        </a>

        <a href="https://linkedin.com/in/olegperchyk/" target="_blank" rel="noreferrer">
          <LinkedinIcon className="mr-3" />
        </a>

        <a href="https://instagram.com/tomyumgoons" target="_blank" rel="noreferrer">
          <InstagramIcon className="mr-3"/>
        </a>

        {/* <a href="https://twitter.com/himynameisoleg" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a> */}
      </div>
    )
  }
}
