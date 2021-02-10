<template>
  <a
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="relative flex items-center justify-center px-4 py-20 text-red-500 transition duration-300 ease-in-out bg-red-100 rounded-xl hover:text-white hover:bg-red-500 dark:bg-red-900 dark:text-red-500 dark:hover:text-black dark:hover:bg-red-500"
  >
    <div class="absolute top-0 right-0 m-4">
      <Icon name="arrow-up-right" />
    </div>
    <span class="text-2xl font-semibold whitespace-nowrap">
      {{ computedName }}
    </span>
  </a>
</template>

<script lang="ts">
import Vue from "vue"
import Icon from "~/components/Icon.vue"

export default Vue.extend({
  name: "ProjectCard",
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedName(): string {
      const maxLength = 10
      return this.name.length > maxLength
        ? `${this.name.substr(0, maxLength)}...`
        : this.name
    },
  },
})
</script>
