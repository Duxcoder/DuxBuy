import { ref } from 'vue';

export function useResizeObserver(el: HTMLElement) {
  const screenWidth = ref(0);

  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const cr = entry.contentRect;
      screenWidth.value = cr.width;
    });
  });
  observer.observe(el);

  return {
    screenWidth
  };
}
