import { createApp } from 'vue'
import createStore from './store/index'
import App from './App.vue'
import router from './router'
import './styles/css/tailwind.css'


createApp(App)
    .use(router)
    .use(createStore)
    .mount('#app')