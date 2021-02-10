<template>
  <h1 class="flex flex-col text-center">
    <span class="font-semibold capitalize text-7xl sm:text-8xl">
      {{ title }}
    </span>
    <span
      class="-mt-1 text-lg tracking-wider text-red-500 lowercase sm:text-2xl"
    >
      {{ subtitle }}
    </span>
  </h1>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
})
</script>
