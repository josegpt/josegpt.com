<template>
  <button
    @click="$emit('click')"
    class="flex items-center px-4 py-2 text-red-500 transition duration-300 ease-in-out border-2 border-red-500 rounded-lg sm:space-x-2 focus:outline-none hover:bg-red-500 hover:text-white"
  >
    <Icon v-if="iconName" :name="iconName" class="hidden sm:flex" />
    <span class="text-sm font-semibold tracking-wide uppercase sm:text-base">
      {{ text }}
    </span>
  </button>
</template>

<script lang="ts">
import Vue from "vue"
import Icon from "~/components/Icon.vue"

export default Vue.extend({
  name: "Button",
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: false,
    },
  },
})
</script>
