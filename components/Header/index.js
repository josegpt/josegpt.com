import React from "react"
import PropTypes from "prop-types"

import { Header } from "./HeaderStyles"
import NavigationContainer from "./Navigation"

const HeaderContainer = ({ navigation }) => (
  <Header>
    <section className="logo">
      <a href="#" className="logo__link">
        <img src="#" alt="#" className="logo__img" />
      </a>
    </section>
    <NavigationContainer navigation={navigation} />
  </Header>
)

HeaderContainer.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default HeaderContainer
