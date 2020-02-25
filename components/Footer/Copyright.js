import React from "react"
import PropTypes from "prop-types"

const Copyright = ({ copyright }) => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="copyright">
      { copyright.brand } &copy; { copyright.year } &mdash; { currentYear }
    </section>
  )
}

Copyright.propTypes = {
  copyright: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
}

export default Copyright
