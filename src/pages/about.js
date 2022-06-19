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
      <p>I have a passion for food -- for the artful and scientific methods of preparing it. I love to feed others and bringing the joy of a delicious meal to my friends and family. I also love to eat my way through new cities. Check out those adventures <a href="https://www.instagram.com/tomyumgoons/">here</a>.</p>
      <br/>

      <p>👨‍💻 <strong>Senior Application Developer:</strong></p>
      <p>I have been working on a whole load of fun stuff @ <strong>Accenture</strong> since 2017. </p> 
      <br/>
      
      <p>☕ <strong>Coffee Enthusiast:</strong></p>
      <p>The world of espresso is amazing. I brew using a modified <a href="https://www.gaggia-na.com/products/gaggia-classic-pro">Gaggia Classic Pro</a> machine and get my bean powder using a <a href="https://www.eureka.co.it/en/catalogo/prodotti/macinacaff%C3%A8+on+demand/1/19.aspx">Eureka Mignon Silenzio</a> grinder.</p>
      <br/>
    </Layout>
  </div>
)
