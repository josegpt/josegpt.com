import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Meta from './Meta'
import Header from './Header'
import Main from './Main'
import Profile from './Profile'
import Content from './Content'
import Footer from './Footer'

injectGlobal`
  :root {
    --color-background: #eee;
    --color-text: #999;
    --color-accent: #2cf;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.6;
  }
`

const Container = styled.div`
  background-color: var(--color-background);
  color: var(--color-text);
  display: grid;
  grid-template-rows: 8rem calc(100vh - 16rem) 8rem;
  grid-template-columns: [full-start] 1fr [center-start] repeat(8, [col-start] minmax(min-content, 14rem)
  [col-end]) [center-end] 1fr [full-end];
  overflow: hidden;
`

class Page extends Component {
  render() {
    return (
      <Container>
        <Meta />
        <Header />
        <Main>
          <Profile />
          <Content>
            {this.props.children}
          </Content>
        </Main>
        <Footer />
      </Container>
    )
  }
}

export default Page
