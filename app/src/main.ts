import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios';
import Config from './config';
import { makeStore } from './store/store';
import '@/assets/index.scss';
axios.get('/config.json').then((response) => {
    const config = new Config();
    config.baseUrl = response.data.baseUrl;
    const app = createApp(App);
    const store = makeStore(app, config);
    app.use(store).use(router).mount('#app');
});
