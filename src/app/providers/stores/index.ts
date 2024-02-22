import { defineStore } from 'pinia';
import { useResizeObserver } from '@/shared/lib/use';

export const useScreenStore = defineStore('screen', () => {
  const { screenWidth } = useResizeObserver(document.body);

  return {
    screenWidth
  };
});
