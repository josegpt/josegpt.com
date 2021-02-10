<template>
  <footer>
    <div class="flex flex-wrap justify-center px-6">
      <slot name="social-networks" />
    </div>
    <div>
      <slot name="copyright" />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Footer",
})
</script>
