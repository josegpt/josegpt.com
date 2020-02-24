import React from "react"
import PropTypes from "prop-types"

import SocialNetworks from "./SocialNetworks"
import Copyright from "./Copyright"

const Footer = ({ socialNetworks, copyright }) => (
  <footer className="footer">
    <SocialNetworks socialNetworks={socialNetworks} />
    <Copyright copyright={copyright} />
  </footer>
)


Footer.propTypes = {
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      url: PropTypes.string
    }).isRequired
  ).isRequired,
  copyright: PropTypes.shape({
    brand: PropTypes.string,
    year: PropTypes.number
  }).isRequired
}

export default Footer
