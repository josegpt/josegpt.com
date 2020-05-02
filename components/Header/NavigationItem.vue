<template>
  <li class="navigation__item">
    <a :href="url" class="navigation__link">
      {{ text }}
    </a>
  </li>
</template>

<script>
export default {
  name: "NavigationItem",
  props: {
    text: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    }
  }
}
</script>
