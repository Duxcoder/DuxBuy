<script setup lang="ts">
import { IconUser } from '@/shared/ui/icons/basic';
defineProps({
  dark: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div class="user-panel">
    <button class="button">
      <IconUser :dark="dark" />
      <span> Войти </span>
    </button>
  </div>
</template>

<style scoped>
.user-panel {
  display: flex;
  height: 100%;
}
.button {
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  gap: 0.4em;
  cursor: pointer;
}
</style>
