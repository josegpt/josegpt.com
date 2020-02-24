import React from "react"
import PropTypes from "prop-types"

import Icon from "../Icon"

const SocialNetwork = ({ socialNetwork }) => (
  <li className="social-networks__item">
    <a href={socialNetwork.url} target="_blank" className="social-networks__link">
      <Icon name={socialNetwork.icon} />
    </a>
  </li>
)

SocialNetwork.propTypes = {
  socialNetwork: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default SocialNetwork
