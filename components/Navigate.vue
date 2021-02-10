<template>
  <NuxtLink :to="localePath(to)" :exact="exact" :active-class="activeClass">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Navigate",
  props: {
    to: {
      type: Object,
      required: true,
    },
    activeClass: {
      type: String,
      required: false,
    },
    exact: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
