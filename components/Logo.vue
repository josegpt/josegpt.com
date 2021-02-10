<template>
  <Navigate :to="{ name: 'index' }" class="flex items-center">
    <img :src="src" :alt="username" class="w-20 h-20 sm:h-32 sm:w-32" />
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
    src: {
      type: String,
      required: true,
    },
  },
})
</script>
