<script setup lang="ts">
import { CONTACTS } from '@/shared/config';

const { PHONE } = CONTACTS;
const PHONE_HREF = `tel:${PHONE.trim()
  .split(' ')
  .join('')
  .split('-')
  .join('')}`;
</script>

<template>
  <a :href="PHONE_HREF" class="button">
    <span class="phone"> {{ PHONE }} </span>
  </a>
</template>

<style scoped>
.phone {
  text-wrap: nowrap;
}
</style>
