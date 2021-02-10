<template>
  <nav
    class="flex items-center justify-between px-2 sm:px-6 h-28 md:justify-around"
  >
    <div class="flex">
      <slot name="left" />
    </div>
    <div class="flex items-center space-x-4 sm:space-x-6">
      <slot name="right" />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Navbar",
})
</script>
