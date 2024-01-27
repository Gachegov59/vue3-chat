import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import dayjs from 'dayjs';
const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;

app.use(router).mount('#app');
