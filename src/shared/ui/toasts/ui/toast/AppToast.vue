<script setup lang="ts">
import type { Toast } from '../../model/types';
defineProps<{
  toast: Toast;
}>();
</script>

<template>
  <div
    class="toast-card"
    :class="toast.status"
    :style="{ 'animation-duration': toast.timeout + 'ms' }"
  >
    <h5 class="status">{{ toast.status }}</h5>
    <p class="body">{{ toast.message }}</p>
  </div>
</template>

<style>
@keyframes loading {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.toast-card {
  position: relative;
  width: 100%;
  cursor: pointer;
  padding: 20px;
  margin: 0.4rem 0;
  border-radius: 6px;
  font-size: 14px;
  color: var(--color__font);
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    opacity: 0.6;
    animation: loading linear forwards;
    animation-duration: inherit;
    transform: translateX(0);
  }
  & > .status {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 0.3em;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
  }

  & > .body {
    width: 100%;
  }

  &.success {
    background-color: #d0ebd0;
    color: #566e56;
    &::after {
      background-color: #566e56;
    }
  }

  &.error {
    background-color: #f9b6b6;
    color: #7b3838;
    &::after {
      background-color: #7b3838;
    }
  }

  &.warning {
    background-color: #f6e7af;
    color: #6d6a49;
    &::after {
      background-color: #6d6a49;
    }
  }

  &.info {
    background-color: #badeeb;
    color: #3d606c;
    &::after {
      background-color: #3d606c;
    }
  }
}
</style>
