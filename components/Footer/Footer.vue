<template>
  <footer class="footer">
    <slot />    
  </footer> 
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  display: grid;
  grid-row-gap: var(--space-l);
  grid-template-rows: 1fr min-content;
}
</style>
