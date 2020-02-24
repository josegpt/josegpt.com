import React from "react"
import PropTypes from "prop-types"

import NavigationItem from "./NavigationItem"

const Navigation = ({ navigation }) => (
  <nav className="navigation__holder">
    <ul className="navigation__list">
      {navigation.map((navItem, i) => <NavigationItem key={i} navItem={navItem} />)}
    </ul>
  </nav>
)

Navigation.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Navigation
