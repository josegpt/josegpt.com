<template>
  <div class="flex flex-col items-center justify-center my-4 space-x-2 space-y-1 text-xs font-medium sm:flex-row sm:space-y-0 sm:text-base">
    <div>
      <span class="font-semibold text-red-500 lowercase">&copy; {{ $t("username") }}</span>
    <span>1992 &bullet; {{ currentYear }}</span>.
    </div>
    <span class="capitalize">{{ $t("allRightsReserved") }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Copyright",
  computed: {
    currentYear(): number {
      const now = new Date()

      return now.getFullYear()
    },
  },
})
</script>
