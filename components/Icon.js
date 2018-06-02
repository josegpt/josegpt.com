import React from 'react'

export default ({ name, color }) => (
  <i className={`fa fa-${name}`} style={{ color }} aria-hidden="true"></i>
)
