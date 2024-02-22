<script setup lang="ts">
import { CONTACTS } from '@/shared/config';
import { AppPhone } from '@/shared/ui/phone';

const { ADDRESS, EMAIL } = CONTACTS;

const MAILTO = `mailto:${EMAIL}`;
</script>

<template>
  <div class="address-panel">
    <AppPhone class="mobile-phone" />
    <p>{{ ADDRESS }}</p>
    <a :href="MAILTO">{{ EMAIL }}</a>
  </div>
</template>

<style scoped>
.address-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-phone {
  font-weight: 600;
  font-size: 18px;
}
</style>
