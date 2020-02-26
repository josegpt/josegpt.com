import React from "react"
import PropTypes from "prop-types"

import { Footer } from "./FooterStyles"
import SocialNetworks from "./SocialNetworks"
import Copyright from "./Copyright"

const FooterContainer = ({ socialNetworks, copyright }) => (
  <Footer>
    <SocialNetworks socialNetworks={socialNetworks} />
    <Copyright copyright={copyright} />
  </Footer>
)

FooterContainer.propTypes = {
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

export default FooterContainer
