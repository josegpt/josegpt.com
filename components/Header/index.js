import React from "react"
import PropTypes from "prop-types"

import Icon from "../Icon"
import Navigation from "./Navigation"

const Header = ({ isDarkMode, toggleDarkMode, navigation }) => (
  <header className="header">
    <section className="logo">
      <a href="#" className="logo__link">
        <img src="#" alt="#" className="logo__img" />
      </a>
    </section>
    <section className="navigation">
      <button
        className="button"
        onClick={() => toggleDarkMode()}
      >
        { isDarkMode ? <Icon name="sun" /> : <Icon name="moon" /> }
      </button>
      <Navigation navigation={navigation} />
    </section>
  </header>
)

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Header
