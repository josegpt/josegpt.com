import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  align-items: center;
  display: grid;
  grid-column: full-start / full-end;
  justify-content: center;
`

const PrimaryHeading = styled.h1`
  font-weight: 300;
`

export default () => (
  <Header>
    <PrimaryHeading>josegpt</PrimaryHeading>
  </Header>
)
