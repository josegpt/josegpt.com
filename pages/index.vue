<template>
  <div :data-theme="isNite ? 'dark' : undefined" class="container">
    <Header>
      <Logo v-bind="logo" :isNite="isNite" />
      <Navigation :navigation="navigation" />
    </Header>
    <Main>
      <Title v-bind="user" />
    </Main>
    <Footer>
      <SocialNetwork :socialNetworks="socialNetworks" />
      <Copyright v-bind="copyright" />
    </Footer>
  </div>
</template>

<script>
import Header from "~/components/Header/Header"
import Logo from "~/components/Header/Logo"
import Navigation from "~/components/Header/Navigation"
import Main from "~/components/Main/Main"
import Title from "~/components/Main/Title"
import Footer from "~/components/Footer/Footer"
import SocialNetwork from "~/components/Footer/SocialNetwork"
import Copyright from "~/components/Footer/Coypright"

export default {
  components: {
    Header,
    Logo,
    Navigation,
    Main,
    Title,
    Footer,
    SocialNetwork,
    Copyright
  },
  data: () => ({
    timeChecker: null,
    isNite: false,
    logo: {
      path: "/img/execode-logo",
      url: "josegpt.com"
    },
    navigation: [
      {
        text: "projects",
        url: "https://github.com/josegpt?tab=repositories"
      }
    ],
    user: {
      name: "Jose G",
      profession: "software engineer"
    },
    socialNetworks: [
      {
        icon: "mail",
        url: "mailto:josegpt27@gmail.com"
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/josegpt"
      },
      {
        icon: "github",
        url: "https://github.com/josegpt"
      },
      {
        icon: "codepen",
        url: "https://codepen.io/josegpt"
      },
      {
        icon: "facebook",
        url: "https://www.facebook.com/josegpt27"
      },
      {
        icon: "twitter",
        url: "https://twitter.com/josegpete"
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/josegpt/"
      }
    ],
    copyright: {
      brand: "execode",
      startingYear: 2020,
    }
  }),
  created () { this.isItNite() },
  beforeDestroy () { clearInterval(this.timeChecker) },
  methods: {
    isItNite () {
      this.timeChecker = setInterval(() => {
        const now = new Date()
        const hour = now.getHours()
        if (hour < 4 || hour >= 16) {
          this.isNite = true
          return
        }
        this.isNite = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.container {
  background-color: var(--color-secondary-500);
  display: grid;
  grid-template-rows: var(--header) calc(var(--main) - (var(--header) + var(--footer))) var(--footer);
}
</style>
