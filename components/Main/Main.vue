<template>
  <main class="main">
    <slot />
  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="scss">
.main {
  align-items: center;
  display: grid;
  justify-content: center;
}
</style>
