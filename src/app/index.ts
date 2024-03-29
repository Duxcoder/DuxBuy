import './styles/index.css';
import { createApp } from 'vue';
import { router, store } from './providers';
import App from './App.vue';

export const application = createApp(App).use(router).use(store);
export default application;
