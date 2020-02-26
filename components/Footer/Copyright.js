import React from "react"
import PropTypes from "prop-types"

import { Copyright } from "./FooterStyles"


const CopyrightContainer = ({ copyright }) => {
  const currentYear = new Date().getFullYear()

  return (
    <Copyright>
      { copyright.brand } &copy; { copyright.year } &mdash; { currentYear }
    </Copyright>
  )
}

CopyrightContainer.propTypes = {
  copyright: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
}

export default CopyrightContainer
