<template>
  <section class="flex items-center justify-center flex-grow">
    <Title :title="$t('name')" :subtitle="$t('profession')" />
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import Title from "~/components/Title.vue"

export default Vue.extend({
  name: "Index",
  components: {
    Title,
  },
})
</script>
