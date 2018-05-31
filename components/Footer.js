import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  grid-column: center-start / center-end;
  place-self: center;
`

const Contact = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
`

const ParagraphWithLove = styled.p`
  margin-top: 1.5rem;
  text-align: center;
`

export default () => (
  <Footer>
    <Contact>
      <i className="fa fa-facebook facebook" aria-hidden="true"></i>
      <i className="fa fa-instagram instagram" aria-hidden="true"></i>
      <i className="fa fa-codepen codepen" aria-hidden="true"></i>
      <i className="fa fa-github-alt github" aria-hidden="true"></i>
      <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
    </Contact>
    <ParagraphWithLove>
      with <i className="fa fa-heart" aria-hidden="true"></i> by josegpt
    </ParagraphWithLove>
  </Footer>
)
