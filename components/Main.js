import React from "react"
import PropTypes from "prop-types"

import { Main } from "./Layout"
import { Heading, Title, SubTitle } from "./Typography"

const MainContainer = ({ name, profession }) => (
  <Main>
    <Heading>
      <Title>{ name }</Title>
      <SubTitle>{ profession }</SubTitle>
    </Heading>
  </Main>
)

MainContainer.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
}

export default MainContainer
