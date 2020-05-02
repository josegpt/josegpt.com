<template>
  <section class="logo">
    <a :href="url" class="logo__link">
      <img
        :src="isNite ? `${path}-variant.svg` : `${path}.svg`"
        :alt="url" class="logo__img"
      />
    </a>
  </section>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<script>
export default {
  name: "Logo",
  props: {
    url: {
      required: true,
      type: String
    },
    path: {
      required: true,
      type: String
    },
    isNite: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.logo {
  &__link {}
  &__img {
    height: auto;
    width: 14rem;
  }
}
</style>
