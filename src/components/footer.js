import * as React from "react"
import PropTypes from "prop-types"
import '../styles/custom.css'


const Footer = () => (
    <footer
    style={{
      padding: `1.5rem`,
      bottom: `0`,
      position: 'fixed',
    }}
    
  >
      <div style={{ 
       display: 'block',   
      float: 'right',
     color: `dimgray`,
     fontFamily: 'Poppins',

}}></div>
  © {new Date().getFullYear()},
  {` `}
  <a href="https://www.digitaleclick.com" style={{ color: `green`, textDecoration: 'none',             fontFamily: 'Poppins',
}}> digitaleclick</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer