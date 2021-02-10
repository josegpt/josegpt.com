<template>
  <a
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="flex items-center justify-center w-10 h-10 mx-2 my-1 text-red-500 transition duration-300 ease-in-out bg-red-100 rounded-full hover:text-white hover:bg-red-500 dark:bg-red-900 dark:text-red-500 dark:hover:text-black dark:hover:bg-red-500"
  >
    <Icon :name="iconName" />
  </a>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "SocialNetwork",
  props: {
    href: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  },
})
</script>
