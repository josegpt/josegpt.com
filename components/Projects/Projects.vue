<template>
  <div class="z-10">
    <div
      @click="$emit('click')"
      :class="{ 'scale-100': isOpen, 'scale-0': !isOpen }"
      class="fixed inset-0 transition duration-300 ease-in-out origin-bottom transform bg-black opacity-25 dark:bg-gray-700"
    />
    <div
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
      class="fixed inset-x-0 bottom-0 max-w-2xl pb-16 mx-auto transition duration-300 ease-in-out delay-200 transform bg-white rounded-t-lg h-2/4 dark:bg-black"
    >
      <header class="flex items-center justify-between h-16 mx-6">
        <h2 class="text-3xl font-semibold capitalize">{{ $t("projects") }}</h2>
        <IconButton @click="$emit('click')" iconName="x" />
      </header>
      <div
        v-if="!projects.success"
        class="flex flex-col items-center justify-center h-full space-y-2"
      >
        <Icon name="frown" class="text-red-500" />
        <span class="font-medium capitalize">
          {{ projects.error }}
        </span>
      </div>
      <div
        v-else
        class="grid h-full grid-cols-1 gap-6 px-6 overflow-y-auto sm:grid-cols-2 md:grid-cols-3"
      >
        <ProjectCard
          v-for="{ name, html_url } in projects.data"
          :key="name"
          :name="name"
          :href="html_url"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Icon from "~/components/Icon.vue"
import IconButton from "~/components/IconButton.vue"
import ProjectCard from "~/components/Projects/ProjectCard.vue"

export default Vue.extend({
  name: "ProjectTable",
  components: {
    Icon,
    IconButton,
    ProjectCard,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    projects: {
      type: Object,
      required: true,
    },
  },
})
</script>
