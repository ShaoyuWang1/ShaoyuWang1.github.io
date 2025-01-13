<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition>
    <div v-show="show" class="absolute bottom-12 transition-opacity lg:bottom-16">
      <img
        src="assets/cursor.png"
        alt="atelierAnchor"
        width="128"
        height="128"
        class="h-32 w-32"
      />
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
