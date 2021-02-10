<template>
  <nuxt-link
    :to="switchLocalePath(checkLang)"
    class="flex items-center space-x-2 font-medium text-gray-500 transition duration-300 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-red-500"
  >
    <Icon name="globe" />
    <span class="uppercase">{{ checkLang }}</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue"
import Icon from "~/components/Icon.vue"

export default Vue.extend({
  name: "Lang",
  components: {
    Icon,
  },
  computed: {
    checkLang(): string {
      return this.$route.path.includes("es") ? "en" : "es"
    },
  },
})
</script>
