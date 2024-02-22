<script setup lang="ts">
import { useToastsStore } from '../model';
import AppToast from './toast';
const store = useToastsStore();
</script>

<template>
  <TransitionGroup class="toasts" tag="div" name="toasts">
    <AppToast v-for="toast in store.toasts" :key="toast.id" :toast="toast" />
  </TransitionGroup>
</template>

<style>
.toasts {
  position: fixed;
  top: 70px;
  right: 5%;
  z-index: 3;
  max-width: 500px;
}
.toasts-enter-active,
.toasts-leave-active {
  transition: all 0.5s ease;
}
.toasts-enter-from,
.toasts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
