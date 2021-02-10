<template>
  <Navigate :to="{ name: 'index' }" class="flex items-center">
    <img
      src="/img/execode-logo-variant.svg"
      :alt="username"
      class="hidden w-20 h-20 dark:block sm:h-32 sm:w-32"
    />
    <img
      src="/img/execode-logo.svg"
      :alt="username"
      class="block w-20 h-20 dark:hidden sm:h-32 sm:w-32"
    />
  </Navigate>
</template>

<script lang="ts">
import Vue from "vue"
import Navigate from "~/components/Navigate.vue"

export default Vue.extend({
  name: "Logo",
  components: {
    Navigate,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
})
</script>
