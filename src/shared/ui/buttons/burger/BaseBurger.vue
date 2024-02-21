<script lang="ts" setup>
import { computed, ref, onUpdated } from 'vue';

const initRender = ref(false);

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: false
  },
  show: {
    type: Boolean,
    required: true
  },
  dark: {
    type: Boolean,
    default: true
  }
});

const classes = computed(() => {
  return {
    burger: true,
    active: props.isOpen,
    inactive: !props.isOpen && initRender.value
  };
});

onUpdated(() => (initRender.value = true));

const color = props.dark ? 'var(--color__dark)' : 'var(--color__white)';
</script>

<template>
  <button :class="classes" v-if="show">
    <svg
      id="hamburger"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="15"
      viewBox="0 0 21 15"
      :stroke="color"
    >
      <path
        id="top-line"
        d="M19.1406 1H0.999512"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        id="middle-line"
        d="M19.1406 7.05469H6.13096"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        id="bottom-line"
        d="M19.1406 13.0508H0.999512"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </button>
</template>

<style scoped>
@import 'style.css';
</style>
