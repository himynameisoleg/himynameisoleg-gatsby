import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <div>
    <Layout>
      <Header headerText="Uses" />
      <div className="content">

        <p>Proud member of the <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer"> uses.tech</a> group. Here is what I've been using lately:</p>
        <br/>
        <p> <strong>Software:</strong></p>
        <ul>
          <li>Visual Studio Code</li>
          <li><a href="https://github.com/VSCodeVim/Vim" target="_blank">vscodevim</a> plugin</li>
          <li>One Dark theme</li>
          <li>Inconsolata font</li>
          <li>iTerm2</li>
          <li>AstoNvim (my <a href="https://github.com/himynameisoleg/dotfiles/" target="_blank">dotfiles</a>)</li>
          <li>tmux</li>
          <li><a href="https://alfredapp.com" target="_blank">Alfred</a> for workflow automation</li>
        </ul>

        <p> <strong>Hardware (on the go):</strong></p>
        <ul>
          <li>MacBook Pro 13" 2017 non-touch-bar</li>
          <li>Airpods Pro</li>
        </ul>
        <br/> 

        <p> <strong>Hardware (home battlestation):</strong></p>
        <ul>
          <li>Custom Desktop PC: Ryzen 5 2600, RX590, 16GB RAM</li>
          <li>HP X32 QHD monitor</li>
          <li>AnnePro 2 w/ Kailh Box Brown</li>
          <li>Logitech G604 mouse</li>
        </ul>
        <br/>

       
      </div>
    </Layout>
  </div>
)
