import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: `0 10rem`
    }}>
    <h1>Your go to best online marketplace</h1>
    <p>At digital eclick, we keenly look into current online trends and how to built trust with every valued customer, by providing top quality products and listen to every customer's review. 
       We work passionately to bring the best of online experience to you and your loved ones, so to make the internet, a best place for shopping.</p>
    <p>Raja Khurram Shahzad <small style={{color: `green`}}>(Founder and CEO)</small></p>
    <p><a href="https://twitter.com/rKhurramShahzad" style={{color: `green`, textDecoration: 'none'}}>@rKhurramShahzad</a></p>
    </div>
    
  </Layout>
)

export default IndexPage
