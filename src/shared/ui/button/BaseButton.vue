<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import BaseSpinner from '@/shared/ui/spinner/BaseSpinner.vue';
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
      <BaseSpinner v-if="loading" absolute color="#fff" />
    </Transition>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  width: auto;
  height: auto;
  padding: 15px 20px;
  margin: 0;
  border-radius: 6px;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:disabled {
    opacity: 0.4;
    cursor: no-drop;
  }
}

.default {
  position: relative;
  transform-style: preserve-3d;
  color: #000;
  font-weight: 500;
  line-height: normal;
  background-color: rgba(255, 255, 255, 1);
  &::before {
    content: '';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: linear-gradient(90deg, #f7941d 0%, #27aae1 100%);
    filter: blur(5px);
    transform: translate3d(0px, 0px, -1px);
    transition: 0.2s ease-out;
  }
  &:not(:active):not(:disabled):hover::before {
    opacity: 0.8;
    filter: blur(20px);
    transform: translate3d(10px, 10px, -1px);
  }
  &:active:not(:disabled),
  &.active:not(:disabled) {
    color: #fff;
    background: #00093c;
  }
  &:disabled {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:disabled > * {
    opacity: 0.4;
  }
}

.filled {
  color: #fff;
  font-weight: 700;
  line-height: 26px;
  background-color: #f7941d;
  &:not(:active):not(:disabled):hover {
    background-color: #ffae4d;
  }
  &:active:not(:disabled),
  &.active:not(:disabled) {
    background-color: #db7800;
  }
}

.outline-light {
  color: #000;
  font-weight: 700;
  line-height: 26px;
  background: transparent;
  border: 2px solid #00093c;
  &:not(:active):not(:disabled):hover {
    color: #fff;
    background-color: #27aae1;
    border: 2px solid transparent;
  }
  &:active:not(:disabled),
  &.active:not(:disabled) {
    color: #fff;
    background-color: #1490c5;
    border: 2px solid transparent;
  }
}

.outline-dark {
  color: #000;
  font-weight: 700;
  line-height: 26px;
  background: transparent;
  border: 2px solid #00093c;
  &:not(:disabled):hover,
  &:active:not(:disabled),
  &.active:not(:disabled) {
    color: #fff;
    background-color: #000;
    border: 2px solid transparent;
  }
}

.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.visible {
  visibility: visible;
  opacity: 1;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}
</style>
