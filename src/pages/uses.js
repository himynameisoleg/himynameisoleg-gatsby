import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <div>
    <Layout>
      <Header headerText="Uses" />
      <p>
        I love the idea of "setup tours" and getting inspiration from others on
        what tools to use to get work done.
      </p>
      <p>
        I have found a lot of fun ones on{" "}
        <a href="https://uses.tech" target="_blank">
          uses.tech
        </a>{" "}
        .
      </p>
      <p>Here is a list of my everyday tools and gear.</p>

      <h2 className="subtitle"></h2>
      <ul className="list">
        <li className="list-item">MacBook Pro 13" 2017</li>
        <li className="list-item">
          Visual Studio Code with{" "}
          <a href="https://github.com/VSCodeVim/Vim" target="_blank">
            vscodevim
          </a>{" "}
          plugin
        </li>
        <li className="list-item">Material Theme High Contrast</li>
        <li className="list-item">
          <b>Inconsolata</b> font
        </li>
        <li className="list-item">
          For quick edits or just for fun I use <strong>iTerm 2</strong> with{" "}
          <strong>tmux</strong> + <strong>Vim </strong> (my{" "}
          <a
            href="https://github.com/himynameisoleg/dotfiles/blob/master/.vimrc"
            target="_blank"
          >
            dotfiles
          </a>
          )
        </li>
        <li className="list-item">
          <a href="https://alfredapp.com" target="_blank">
            Alfred
          </a>{" "}
          for Workflows and automation
        </li>
      </ul>
    </Layout>
  </div>
)
