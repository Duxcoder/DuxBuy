import { ref } from 'vue';

export function useFetch() {
  const isLoading = ref(true);
  const result = ref();
  const error = ref('');

  async function runWithLoading<T>(handler: () => Promise<T>): Promise<void> {
    try {
      result.value = await handler();
    } catch (e) {
      error.value = (e as Error).message;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    runWithLoading,
    data: result,
    error: error
  };
}
