import React from "react"
import PropTypes from "prop-types"

import { NavigationItem, NavigationLink } from "./HeaderStyles"


const NavigationItemContainer = ({ navItem }) => (
  <NavigationItem>
    <NavigationLink
      href={navItem.url}
      target="_blank"
      rel="noreferrer"
    >
      { navItem.text }
    </NavigationLink>
  </NavigationItem>
)

NavigationItemContainer.propTypes = {
  navItem: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default NavigationItemContainer
