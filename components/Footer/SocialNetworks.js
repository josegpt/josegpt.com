import React from "react"
import PropTypes from "prop-types"

import SocialNetwork from "./SocialNetwork"

const SocialNetworks = ({ socialNetworks }) => (
  <section className="socials-network">
    <ul className="social-networks__list">
      {socialNetworks.map((socialNetwork, i) => (
        <SocialNetwork key={i} socialNetwork={socialNetwork} />
      ))}
    </ul>
  </section>
)

SocialNetworks.propTypes = {
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default SocialNetworks
