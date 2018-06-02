import React from 'react'
import styled from 'styled-components'

const Profile = styled.section`
  display: grid;
  grid-template-columns: .3fr 1fr;
  grid-gap: 3rem;
`

const Photo = styled.img`
  border-radius: .3rem;
  width: 100%;
`

const Intro = styled.article`

`

export default () => (
  <Profile>
    <Photo
      src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
      alt="Photo"
    />
    <Intro>
      <p>Hello!</p>
      <p>I am Jose G Perez Taveras</p>
      <p>a Full Stack Developer</p>
    </Intro>
  </Profile>
)
