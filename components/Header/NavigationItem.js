import React from "react"
import PropTypes from "prop-types"

const NavigationItem = ({ navItem }) => (
  <li className="navigation__item">
    <a href={navItem.url} target="_blank" className="navigation__link">
      { navItem.text }
    </a>
  </li>
)

NavigationItem.propTypes = {
  navItem: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default NavigationItem
