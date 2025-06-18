import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' // router 아래의 js 파일이 온다.

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
