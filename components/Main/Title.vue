<template>
  <h1 class="heading-primary">
    <span class="heading-primary--main">{{ name }}</span>
    <span class="heading-primary--sub">{{ profession }}</span>
  </h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    name: {
      required: true,
      type: String
    },
    profession: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss">
.heading-primary {
  cursor: default;
  letter-spacing: .5rem;
  text-align: center;
  user-select: none;
  
  &--main {
    color: var(--color-tertiary-500);
    display: block;
    font-size: 8rem;
    font-weight: 700;
    margin-bottom: -2rem;
  }
  &--sub {
    display: block;
    color: var(--color-primary-500);
    font-size: 2rem;
    font-weight: 300;
  }
}
</style>
