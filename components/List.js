import React from 'react'
import ListItem from './ListItem'

export default ({ data }) =>
  data.map((el, i) => <ListItem key={i} {...el} />)
