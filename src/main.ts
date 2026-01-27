import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/main.css'
import {Fonts}  from './assets/fonts/app_fonts';
import {Colors}  from './assets/colors/app_colors';
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.config.globalProperties.$Fonts = Fonts
app.config.globalProperties.$Colors = Colors

app.mount('#app')
