import React from 'react'

export default ({ type, name, color }) => (
  <i className={`${type} fa-${name}`} style={{ color }}></i>
)
