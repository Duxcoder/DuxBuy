<script setup lang="ts">
defineProps({
  absolute: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#ffffff;'
  }
});
</script>

<template>
  <span
    class="spinner"
    :style="{
      position: absolute ? 'absolute' : 'static',
      borderColor: color,
      borderBottomColor: '#404040'
    }"
  ></span>
</template>

<style scoped>
.spinner {
  min-width: 24px;
  min-height: 24px;
  border: 4px solid;
  border-color: #fff;
  border-bottom-color: #404040;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
