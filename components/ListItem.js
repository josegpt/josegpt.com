import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: dodgerblue;
  border-radius: .3rem;
  color: white;
  padding: 3rem;
  text-align: center;
`
export default ({ name }) => (
  <Card>{name}</Card>
)
