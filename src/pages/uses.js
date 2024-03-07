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
          <li>Editor: VS Code, <a href="https://zed.dev" target="_blank">Zed</a> - a wonderful new text editor written in Rust</li>
          <li>Terminal: <a href="https://www.warp.dev" target="_blank">Warp</a> - an AI powered terminal written in Rust </li>
          <li>Vim: AstoNvim (my <a href="https://github.com/himynameisoleg/dotfiles/" target="_blank">dotfiles</a>) - for when you need to be productive in the terminal</li>
        </ul>

        <p> <strong>Hardware (on the go):</strong></p>
        <ul>
          <li>Laptop: MacBook Pro M1 Max 16</li>
          <li>Headphones: AIAIAI TMA-2 BT</li>
        </ul>
        <br/> 

        <p> <strong>Hardware (home battlestation):</strong></p>
        <ul>
          <li>Desktp: Ryzen 5 2600, RX590, 16GB RAM</li>
          <li>Monitors: NEC EA244 - still going strong (thanks Alfredo!)</li>
          <li>Keyboard(s): Planck rev6, crkbd corne, Sofle RGB v2.1, Keychron K2, Anne Pro 2, keeb.io Iris rev4, keeb.io levinson, cannonkeys Orhto60  </li>
          <li>Mouse: Logitech G604</li>
        </ul>
        <br/>

       
      </div>
    </Layout>
  </div>
)
