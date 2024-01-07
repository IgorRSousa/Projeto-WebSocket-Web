import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Vue from 'vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(VueAxios, axios).mount('#app')