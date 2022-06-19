import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <div>
    <Layout>
      <Header headerText="Uses" />
      <div className="content">

        <p>Proud member of the <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer"> uses.tech</a> fam. Here is what I've been using lately:</p>
        <br/>
        <p> <strong>Hardware (on the go):</strong></p>
        <ul>
          <li>MacBook Pro 13" 2017 non-touch-bar</li>
          <li>Airpods Pro</li>
        </ul>
        <br/> 

        <p> <strong>Hardware (at home):</strong></p>
        <ul>
          <li>Custom Desktop PC: Ryzen 5 2600, RX590, 16GB RAM</li>
          <li>NEC EA244WMI 24" monitor</li>
          <li>Keychron K2 hot swap w/ Aliaz silent switches</li>
          <li>Logitech G604 mouse</li>
        </ul>
        <br/>

        <p> <strong>Software:</strong></p>
        <ul>
          <li>Visual Studio Code</li>
          <li><a href="https://github.com/VSCodeVim/Vim" target="_blank">vscodevim</a> plugin</li>
          <li>Atom One Dark theme</li>
          <li>Inconsolata font</li>
          <li>iTerm2</li>
          <li>Messing around with Vim (my <a href="https://github.com/himynameisoleg/dotfiles/blob/master/.vimrc" target="_blank">dotfiles</a>)</li>
          <li><a href="https://alfredapp.com" target="_blank">Alfred</a> for workflow automation</li>
        </ul>
      </div>
    </Layout>
  </div>
)
