import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"

export default () => {
  const todos = [
    "persistant components (eg. navbar) like in Nuxt.js",
    "Integrate UI library for instant wins",
    "When do I need to use class-based components?",
    '.md type blog "posts"',
    "served by a graph sever maybe, just to explore this topic ?",
    "firgure out how to loop li's in react",
    "probably should casually plug chonk.io somewhere",
    "Actually build it out so im not plugging something useless and empty",
    "and probbaly migrate it to Gatsby because this has been oh so pleasent",
  ]
  const todosList = todos.map((item, index) => {
    if ([1, 5].indexOf(index) !== -1) {
      return (
        <li className="list-item">
          <strike>{item}</strike>
        </li>
      )
    } else {
      return <li className="list-item">{item}</li>
    }
  })

  return (
    <div>
      <Navbar />

      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            {/* header /\ */}
            <div className="container">
              <Header headerText="Welcome to my Gatsby Site" />
              <h2 className="subtitle">What a world.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            {/* todos list  */}
            <div className="container">
              <Header headerText="This site TODOS:" />
              <ul>{todosList}</ul>
            </div>

            {/* random image  */}
            <div className="contaner">
              <figure className="image">
                <img
                  src="https://source.unsplash.com/random/400x200"
                  alt="random img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
