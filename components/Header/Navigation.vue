<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <NavigationItem
        v-for="item in navigation"
        :key="item.text"
        v-bind="item"
      />
    </ul>
  </nav>
</template>

<script>
import NavigationItem from "~/components/Header/NavigationItem"

export default {
  name: "Navigation",
  components: {
    NavigationItem
  },
  props: {
    navigation: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss">
.navigation {
  &__list {
    align-items: center;
    display: flex;
    list-style: none;
  }
  &__item {
    color: var(--color-tertiary-300);
    transition: var(--animation);
    &:not(:last-child) {
      margin-right: var(--space-xl);
    }
    &:hover,
    &--active {
      color: var(--color-primary-500);
    }
    &--border {
      border: var(--space-md) solid var(--color-primary-500);
      border-radius: 10rem;
      color: var(--color-tertiary-500);
      &:hover {
        background-color: var(--color-primary-500);
        color: var(--color-secondary-500);
      }
    }
  }
  &__link {
    &:link,
    &:visited {
      color: inherit;
      display: flex;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
    }
    &--border {
      padding: var(--space-md) var(--space-l);
    }
  }
}
</style>
