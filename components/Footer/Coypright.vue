<template>
<section class="copyright">
  <span class="copyright__text">
    {{ brand }}
  </span>
  <span>
    &copy; {{ startingYear }} &mdash; {{ currentYear }}
  </span>
</section>
</template>

<script>
export default {
  name: "Copyright",
  props: {
    brand: {
      required: true,
      type: String
    },
    startingYear: {
      required: true,
      type: Number
    }
  },
  computed: {
    currentYear() {
      const now = new Date()
      return now.getFullYear()
    }
  }
}
</script>

<style lang="scss">
.copyright {
  align-items: center;
  color: var(--color-tertiary-300);
  cursor: default;
  display: block;
  font-weight: 700;
  margin-bottom: var(--space-md);
  text-align: center;
  user-select: none;
  
  &__text {
    color: var(--color-primary-400);
    font-weight: 400;
  }
}
</style>
