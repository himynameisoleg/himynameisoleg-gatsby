import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"


export default () => (
  <div>
    <Layout>
      <Header headerText="About Me" />
      <p>Hi my name is Oleg Perchyk.</p>
      <p>I was born in 🇺🇦 Ukraine and I live, eat and play in 🏙️ Chicago. I am a...</p>
      <br/>

      <p>👨‍🍳 <strong>Home Chef:</strong></p>
      <p>I have a passion for food -- for the artful and scientific methods of preparing it. I love to feed others and bringing the joy of a delicious meal to my friends and family. I also love to eat my way through new cities. Check out those adventures <a href="https://www.instagram.com/tomyumgoons/" target="_blank" rel="noreferrer">here</a>.</p>
      <br/>

      <p>🪛 <strong>Hardware Tinkerer:</strong></p>
      <p>I love diving into hands-on projects like building, soldering, and 3D printing. From tinkering with MCUs, Raspberry Pis, and FPGAs to repairing vintage PVM CRTs, I thrive on challenges. Whether it's crafting analog guitar pedals or soldering a new mechanical keyboard.</p>
      <br />

      <p>👨‍💻 <strong>Technical Manager and Lead Engineer:</strong></p>
      <p>I have been solving a whole lot of interesting problems in my roles @<strong>United Airlines</strong>  and  @<strong>Accenture</strong> building robust microservices, intelligent chatbots, web applications and cloudformation pipelines.</p> 
      <br/>
      
      <p>☕ <strong>Coffee Enthusiast:</strong></p>
      <p>Can't live without it. I brew using a modified <a href="https://www.gaggia-na.com/products/gaggia-classic-pro" target="_blank" rel="noreferrer" >Gaggia Classic Pro</a> machine and get my bean powder using a <a href="https://www.eureka.co.it/en/catalogo/prodotti/macinacaff%C3%A8+on+demand/1/19.aspx" target="_blank" rel="noreferrer">Eureka Mignon Silenzio</a> grinder.</p>
      <br/>

    </Layout>
  </div>
)
