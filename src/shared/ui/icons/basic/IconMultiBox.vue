<script setup lang="ts">
const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
});

const color = props.dark ? 'var(--color__dark)' : 'var(--color__white)';
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    :stroke="color"
  >
    <rect
      x="1"
      y="1.51392"
      width="18"
      height="4.99717"
      rx="1"
      stroke-width="2"
    />
    <rect x="1" y="10.4858" width="18" height="5" rx="1" stroke-width="2" />
  </svg>
</template>
