<template>
  <section class="flex items-center justify-center flex-grow">
    <Title :title="$t('name')" :subtitle="$t('profession')" />
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import Title from "~/components/Title.vue"

export default Vue.extend({
  name: "Index",
  components: {
    Title,
  },
  async fetch() {
    this.$store.commit("setError", "")

    try {
      const response = await this.$axios.get(
        "https://api.github.com/users/josegpt/repos"
      )
      this.$store.commit("setProjects", response.data)
    } catch {
      this.$store.commit("setError", "there was an error getting the projects")
    }
  },
})
</script>
