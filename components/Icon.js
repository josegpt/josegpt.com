import React from "react"
import PropTypes from "prop-types"
import FeatherIcon from "feather-icons-react"

const Icon = ({ name }) => (
  <FeatherIcon icon={name} />
)

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon
