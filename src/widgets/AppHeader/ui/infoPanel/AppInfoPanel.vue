<script setup lang="ts">
import { AppSelectCity } from '../selectCity';
import { AppUserPanel } from '../userPanel';
import { AppPhone } from '@/shared/ui/phone';

defineProps({
  dark: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div class="info-panel">
    <AppSelectCity :dark="dark" />
    <AppPhone />
    <AppUserPanel :dark="dark" />
  </div>
</template>

<style scoped>
.info-panel {
  display: flex;
  align-items: center;
  gap: 0;
  & > * {
    display: flex;
    height: 100%;
    padding: 0 12px;
    position: relative;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(to left, #f7941d, #27aae1);
      transition: opacity 0.3s;
      opacity: 0;
      z-index: 1;
    }
    &:hover::after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(to left, #f7941d, #27aae1);
      transition: 0.3s;
      opacity: 1;
    }
  }
}

@media (min-width: 900px) {
  .info-panel {
    gap: 18px;
  }
}
</style>
