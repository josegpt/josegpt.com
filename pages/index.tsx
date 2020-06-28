import React from "react"
import engineer from "../constants"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import Main from "../components/Main"
import Title, { Subtitle } from "../components/Title"
import Footer from "../components/Footer"
import SocialNetwork from "../components/SocialNetwork"
import Copyright from "../components/Copyright"

function Index({ engineer }): JSX.Element {
  return (
    <Layout name={engineer.name} profession={engineer.profession}>
      <Header>
        <Logo brandName={engineer.copyright.brand} logoPath={engineer.logo} />
        <Navigation navigation={engineer.navigation} />
      </Header>
      <Main>
        <Title text={engineer.name} />
        <Subtitle text={engineer.profession} />
      </Main>
      <Footer>
        <SocialNetwork socialNetwork={engineer.socialNetwork} />
        <Copyright
          brandName={engineer.copyright.brand}
          startingYear={engineer.copyright.year}
        />
      </Footer>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { engineer },
  }
}

export default Index
