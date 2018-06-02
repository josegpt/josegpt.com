import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Icon from './Icon'

const randomNumber = () => Math.floor(Math.random() * 255) + 1

const Action = styled.span`
  opacity: 0;
  position: absolute;
  right: 1rem;
  top: .5rem;
  transition: all .2s ease-in;
  visibility: hidden;
`

const Card = styled.a`
  background-color: ${props => props.color};
  border-radius: .3rem;
  color: white;
  padding: 3rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: transform .2s ease-in;

  &:hover {
    transform: scale(1.03);
  }

  &:hover > ${Action} {
    opacity: 1;
    visibility: visible;
  }
`
const CardHeader = styled.div`

`
const Paragraph = styled.p`
  text-transform: uppercase;
`

const CardContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
`

const Stack = styled.div`
  display: grid;
`
const Date = styled.span`
  margin-left: 1rem;
`

const renderLanguage = (language) => {
  switch(language) {
    case 'JavaScript':
      return <Icon type="fab" name="js" />
  }
}

export default ({ name, language, updated_at, html_url }) => (
  <Card
    color={`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`}
    href={html_url}
    target="_blank"
  >
    <Action><Icon type="fas" name="external-link-alt" /></Action>
    <CardHeader>
      <Paragraph>{name.length < 14 ? name : name.slice(0, 14) + '...'}</Paragraph>
    </CardHeader>
    <CardContent>
      <Stack>
        {renderLanguage(language)}
      </Stack>
      <Paragraph>
        <Icon type="far" name="calendar-alt" /><Date>{moment(updated_at).format('MMM DD, YYYY')}</Date>
      </Paragraph>
    </CardContent>
  </Card>
)
