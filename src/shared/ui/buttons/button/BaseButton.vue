<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import { BaseSpinner } from '@/shared/ui/spinner';
const emit = defineEmits(['click']);

const props = defineProps({
  type: {
    type: String as PropType<
      'default' | 'filled' | 'outline-light' | 'outline-dark'
    >,
    default: 'default'
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const classes = computed(() => {
  return {
    button: true,
    [props.type]: true
  };
});

const active = computed(() => !props.disabled && !props.loading);

function emitClick(e: Event) {
  if (e === void 0 || e.defaultPrevented) return;
  e.cancelable && e.preventDefault();
  e.stopPropagation();
  active.value && emit('click', e);
}
</script>

<template>
  <button :class="classes" @click="emitClick" :disabled="!active" value="Click">
    <div :class="loading ? 'hidden' : 'visible'">
      <slot v-if="!label" />
      <template v-else>
        {{ label }}
      </template>
    </div>
    <Transition>
      <BaseSpinner v-if="loading" absolute color="var(--color__white)" />
    </Transition>
  </button>
</template>

<style scoped>
@import 'style.css';
</style>
