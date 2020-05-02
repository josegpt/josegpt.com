<template>
  <feather class="social__icon" :type="name"></feather>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      required: true,
      type: String
    }
  }
}
</script>
