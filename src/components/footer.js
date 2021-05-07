import * as React from "react"
import PropTypes from "prop-types"

const Footer = () => (
    <footer
    style={{
      padding: `1.5rem`,
      bottom: `0`,
      position: 'fixed',

    }}
    
  >
  © {new Date().getFullYear()},
  {` `}
  <a href="https://www.digitaleclick.com" style={{ color: `green`, textDecoration: 'none'}}> digitaleclick</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer