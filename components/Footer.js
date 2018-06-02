import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Footer = styled.footer`
  align-items: center;
  display: grid;
  grid-column: full-start / full-end;
  justify-content: center;
`

const Contact = styled.div`

`

const ContactList = styled.ul`
  list-style: none;
`

const ContactItem = styled.li`
  display: inline-block;
`

const ContactLink = styled.a`
  color: inherit;
  margin: 0 1.5rem;
`

const ParagraphWithLove = styled.p`
  text-align: center;
`

export default () => (
  <Footer>
    <Contact>
      <ContactList>
        <ContactItem>
          <ContactLink target="_blank" href="https://www.facebook.com/joseept"><Icon type="fab" name="facebook-f" color="#47639E" /></ContactLink>
          <ContactLink target="_blank" href="https://www.instagram.com/joseept"><Icon type="fab" name="instagram" color="#E84B50" /></ContactLink>
          <ContactLink target="_blank" href="https://codepen.io/josegpt"><Icon type="fab" name="codepen" color="#191919" /></ContactLink>
          <ContactLink target="_blank" href="https://github.com/josegpt"><Icon type="fab" name="github" color="#2B3137" /></ContactLink>
          <ContactLink target="_blank" href="https://www.linkedin.com/in/josegpt"><Icon type="fab" name="linkedin-in" color="#0077B5" /></ContactLink>
          <ContactLink href="mailto:josegpt27@gmail.com"><Icon type="far" name="envelope" color="#888" /></ContactLink>
        </ContactItem>
      </ContactList>
    </Contact>
    <ParagraphWithLove>
      with <Icon type="fas" name="heart" color="red" /> by josegpt
    </ParagraphWithLove>
  </Footer>
)
