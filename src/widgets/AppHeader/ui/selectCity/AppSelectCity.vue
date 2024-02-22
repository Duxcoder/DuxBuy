<script setup lang="ts">
import { IconMap } from '@/shared/ui/icons/basic';
import { onBeforeMount, ref, watch } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
import { useScreenStore } from '@/app/providers/stores/index';
import { useLocalStorage } from '@/shared/lib/browser';
import { useFetch } from '@/shared/lib/use/useFetch';
import getCityList from '@/widgets/AppHeader/api/getCityList';
import { useToastsStore } from '@/shared/ui/toasts/model';
import type { CityList } from './types';
import { getColumn, getGridTemplateStyle } from './model';

defineProps({
  dark: {
    type: Boolean,
    default: true
  }
});

const store = useToastsStore();
const screenStore = useScreenStore();
const { value: LSSelected, setLSValue: LSSetSelected } =
  useLocalStorage<string>('selected-city', 'Выбор города');
const { isLoading, error, data, runWithLoading } = useFetch();

const selected = ref(LSSelected);
const openList = ref(false);
const list = ref<CityList>([]);

const column = ref(getColumn(screenStore.screenWidth));
const row = ref(Math.ceil(list.value.length / column.value));
const toggleOpen = () => (openList.value = !openList.value);

const setCity = (city: string) => {
  selected.value = city;
  LSSetSelected(city);
};

const handlerClick = (value: string) => {
  setCity(value);
  openList.value = false;
};

onBeforeMount(() =>
  runWithLoading<CityList>(
    async () => await getCityList<CityList>('api/cities')
  )
);

watch(error, () => store.showError(`Ошибка загрузки городов: ${error.value}`));
watch(
  () => screenStore.screenWidth,
  () => {
    column.value = getColumn(screenStore.screenWidth);
    row.value = Math.ceil(list.value.length / column.value);
  }
);
</script>

<template>
  <div class="select-wrapper">
    <div class="select" @click="toggleOpen" :class="{ active: openList }">
      <IconMap :dark="dark" />
      <span>{{ selected }}</span>
      <ChevronDownIcon :class="{ 'icon-chevron': true, reverse: openList }" />
    </div>
    <Transition>
      <section v-if="openList" class="container">
        <div class="city-wrapper">
          <h3 class="title">Выберите свой город</h3>
          <h3 v-if="isLoading">Загрузка...</h3>
          <ul
            v-else
            class="city-list"
            :style="getGridTemplateStyle(column, row)"
          >
            <li class="city-item" v-for="city in data" :key="city.id">
              <span class="city-name" @click="() => handlerClick(city.name)">{{
                city.name
              }}</span>
            </li>
          </ul>
        </div>
      </section>
    </Transition>
  </div>
</template>

<style scoped>
@import 'style.css';
</style>
