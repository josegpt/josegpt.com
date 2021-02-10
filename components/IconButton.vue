<template>
  <button
    @click="$emit('click')"
    class="flex items-center text-gray-500 transition duration-300 ease-in-out focus:outline-none hover:text-red-500"
  >
    <Icon v-if="iconName" :name="iconName" />
  </button>
</template>

<script lang="ts">
import Vue from "vue"
import Icon from "~/components/Icon.vue"

export default Vue.extend({
  name: "IconButton",
  components: {
    Icon,
  },
  props: {
    iconName: {
      type: String,
      required: false,
    },
  },
})
</script>
