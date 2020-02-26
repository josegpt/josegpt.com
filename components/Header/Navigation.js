import React from "react"
import PropTypes from "prop-types"

import { Navigation, NavigationList } from "./HeaderStyles"
import NavigationItemContainer from "./NavigationItem"

const NavigationContainer = ({ navigation }) => (
  <Navigation>
    <NavigationList>
      {navigation.map((navItem, i) => <NavigationItemContainer key={i} navItem={navItem} />)}
    </NavigationList>
  </Navigation>
)

NavigationContainer.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default NavigationContainer
