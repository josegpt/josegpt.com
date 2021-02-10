<template>
  <div
    class="flex flex-col h-full font-sans antialiased text-gray-800 bg-white dark:bg-black dark:text-white"
  >
    <Navbar>
      <template v-slot:left>
        <Logo :username="$t('username')" src="/img/execode-logo.svg" />
      </template>
      <template v-slot:right>
        <ChangeLang />
        <Button @click="showMenu" :text="$t('projects')" iconName="github" />
      </template>
    </Navbar>
    <Nuxt />
    <Footer>
      <template v-slot:social-networks>
        <SocialNetwork
          v-for="{ iconName, href } in $t('socialNetworks')"
          :key="href"
          :href="href"
          :iconName="iconName"
        />
      </template>
      <template v-slot:copyright>
        <Copyright />
      </template>
    </Footer>
    <ProjectTable @click="hideMenu" :isOpen="isMenuOpen" :projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Project } from "~/store"
import { mapMutations } from "vuex"

import Logo from "~/components/Logo.vue"
import Button from "~/components/Button.vue"
import Navbar from "~/components/Navbar.vue"
import Footer from "~/components/Footer.vue"
import Copyright from "~/components/Copyright.vue"
import ChangeLang from "~/components/ChangeLang.vue"
import SocialNetwork from "~/components/SocialNetwork.vue"
import ProjectTable from "~/components/Projects/Projects.vue"

export default Vue.extend({
  name: "Layout",
  components: {
    Logo,
    Button,
    Navbar,
    Footer,
    Copyright,
    ChangeLang,
    ProjectTable,
    SocialNetwork,
  },
  computed: {
    isMenuOpen(): boolean {
      return this.$store.getters.isMenuOpen
    },
    projects(): Project[] {
      return this.$store.getters.projects
    },
  },
  methods: {
    ...mapMutations({
      showMenu: "showMenu",
      hideMenu: "hideMenu",
    }),
  },
})
</script>
