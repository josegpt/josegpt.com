import React from "react"
import PropTypes from "prop-types"

import { SocialNetwork, SocialNetworkLink } from "./FooterStyles"
import Icon from "../Icon"

const SocialNetworkContainer = ({ socialNetwork }) => (
  <SocialNetwork>
    <SocialNetworkLink
      href={socialNetwork.url}
      target="_blank"
      rel="noreferrer"
      aria-label={socialNetwork.icon}
    >
      <Icon name={socialNetwork.icon} />
    </SocialNetworkLink>
  </SocialNetwork>
)

SocialNetworkContainer.propTypes = {
  socialNetwork: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default SocialNetworkContainer
