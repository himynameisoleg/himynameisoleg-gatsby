import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/about/">About</Link>
    <span> / </span>
    <Link to="/contact/">Contact</Link>

    <Header headerText="himynameisoleg and Welcome to my Gatsby Site" />
    <p>What a world.</p>
    <Header headerText="This site TODOS:" />
    <ul>
      <li>persistant components (eg. navbar) like in Nuxt.js</li>
      <li>Integrate UI library for instant wins</li>
      <li>When do I need to use class-based components?</li>
      <li>.md type blog "posts"</li>
      <li>served by a graph sever maybe, just to explore this topic ?</li>
      <li>firgure out how to loop li's in react</li>
      <li>
        probably should casually plug <a href="https://chonk.io">chonk.io</a>{" "}
        somewhere
      </li>
      <li>
        Actually build it out so im not plugging something useless and empty
      </li>
      <li>
        {" "}
        and probbaly migrate it to Gatsby because this has been oh so pleasent
      </li>
    </ul>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
