import React from "react"
import PropTypes from "prop-types"

import { SocialNetworks, SocialNetworksList } from "./FooterStyles"
import SocialNetworkContainer from "./SocialNetwork"

const SocialNetworksContainer = ({ socialNetworks }) => (
  <SocialNetworks>
    <SocialNetworksList>
      {socialNetworks.map((socialNetwork, i) => (
        <SocialNetworkContainer key={i} socialNetwork={socialNetwork} />
      ))}
    </SocialNetworksList>
  </SocialNetworks>
)

SocialNetworksContainer.propTypes = {
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default SocialNetworksContainer
