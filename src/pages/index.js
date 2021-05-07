import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/custom.css'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{
            display: 'flex',
            fontFamily: 'Poppins',
            alignItems: 'center',
            flexDirection: 'column',
            padding: `0 10rem`,
            color: `charcoal`
    }}>
    <h1>Your go to best online marketplace</h1>
    <p>At digital eclick, we keenly look into current online trends and how to built trust with every valued customer, by providing top quality products and listen to every customer's review. 
       We work passionately to bring the best of online experience to you and your loved ones, so to make the internet, a best place for shopping.</p>
    <p>Contact us at: <small style={{color: `green`}}>info@digitaleclick.com</small></p>
    </div>
    
  </Layout>
)

export default IndexPage
