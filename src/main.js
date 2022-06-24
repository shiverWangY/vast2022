import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

createApp(App).use(store).use(TDesign).mount('#app')
