import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import type { Toast, ToastsStore } from './types';
import { ToastsStatus } from './types';

const NAMESPACE = 'toasts';

export const useToastsStore = defineStore(NAMESPACE, (): ToastsStore => {
  const toasts = reactive<Toast[]>([]);

  const counter = ref(1);

  function showError(message: string, timeout?: number): void {
    createAndSetDestroy(ToastsStatus.error, message, timeout);
  }
  function showSuccess(message: string, timeout?: number): void {
    createAndSetDestroy(ToastsStatus.success, message, timeout);
  }
  function showWarning(message: string, timeout?: number): void {
    createAndSetDestroy(ToastsStatus.warning, message, timeout);
  }
  function showInfo(message: string, timeout?: number): void {
    createAndSetDestroy(ToastsStatus.info, message, timeout);
  }

  function createAndSetDestroy(
    status: ToastsStatus,
    message: string,
    timeout: number = 4000
  ) {
    const id = counter.value;
    counter.value += 1;

    add({ id, status, message, timeout });

    setTimeout(() => destroy(id), timeout);
  }

  function add(data: Toast) {
    toasts.push(data);
  }

  function destroy(id: number) {
    const idToast = toasts.findIndex((toast) => toast.id === id);
    if (idToast !== -1) toasts.splice(idToast, 1);
  }

  return {
    toasts,
    showError,
    showSuccess,
    showWarning,
    showInfo
  };
});
