<template>
  <li class="social__item">
    <a :href="url" class="social__link">
      <Icon :name="icon" />
    </a>
  </li>
</template>

<script>
import Icon from "~/components/Footer/Icon"

export default {
  name: "SocialNetworkItem",
  components: {
    Icon
  },
  props: {
    url: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    }
  }
}
</script>
