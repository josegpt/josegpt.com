import React from "react"
import PropTypes from "prop-types"


const Main = ({ name, profession }) => (
  <main className="main">
    <h1 className="heading-primary">
      <span className="heading-primary--main">{name}</span>
      <span className="heading-primary--sub">{profession}</span>
    </h1>
  </main>
)

Main.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
}

export default Main
