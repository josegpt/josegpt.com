<template>
  <svg class="w-5 h-5 text-current fill-current sm:w-6 sm:h-6">
    <use :xlink:href="`/img/sprite.svg#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>
