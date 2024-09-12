import { createApp } from 'vue';
import '@/assets/css/main.css';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from './router';

const app = createApp(App);
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

createApp(App).mount('#app');
