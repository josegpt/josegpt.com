<template>    
  <section class="social">
    <ul class="social__list">
      <SocialNetworkItem
        v-for="item in socialNetworks"
        :key="item.icon"
        v-bind="item"
      />
    </ul>
  </section>
</template>

<script>
import SocialNetworkItem from "~/components/Footer/SocialNetworkItem"
export default {
  name: "SocialNetwork",
  components: {
    SocialNetworkItem
  },
  props: {
    socialNetworks: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss">
.social {
  align-items: center;
  display: grid;
  
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }
  &__item {
    background-color: var(--color-primary-200);
    color: var(--color-primary-500);
    border-radius: 50%;
    margin: var(--space-d);
    transition: var(--animation);
    
    &:hover {
      background-color: var(--color-primary-500);
      color: var(--color-secondary-500);
    }
  }
  &__link {
    &:link,
    &:visited {
      align-items: center;
      color: inherit;
      display: flex;
      justify-content: center;
      padding: var(--space-l);
      text-decoration: none;
    }
  }
  &__icon {
    height: 2.4rem;
    width: 2.4rem;
  }
}
</style>
