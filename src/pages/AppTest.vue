<script setup lang="ts">
import BaseButton from '@/shared/ui/button/BaseButton.vue';
import { ref } from 'vue';

const loading = ref({
  default: false,
  filled: false,
  outlineLight: false,
  outlineDark: false
});

function toggleLoading(
  type: 'default' | 'filled' | 'outlineLight' | 'outlineDark'
) {
  loading.value[type] = !loading.value[type];
  setTimeout(() => {
    loading.value[type] = !loading.value[type];
  }, 3000);
}
</script>

<template>
  <h1>Test UI page</h1>
  <hr />
  <h2>Buttons:</h2>
  <div class="buttons">
    <BaseButton
      type="default"
      :loading="loading.default"
      @click="() => toggleLoading('default')"
    >
      Default button
    </BaseButton>
    <BaseButton
      type="filled"
      :loading="loading.filled"
      @click="() => toggleLoading('filled')"
    >
      Filled button
    </BaseButton>
    <BaseButton
      type="outline-light"
      :loading="loading.outlineLight"
      @click="() => toggleLoading('outlineLight')"
    >
      Outline-light button
    </BaseButton>
    <BaseButton
      type="outline-dark"
      :loading="loading.outlineDark"
      @click="() => toggleLoading('outlineDark')"
    >
      Outline-dark button
    </BaseButton>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 1rem;
  margin: 1rem;
}
</style>
