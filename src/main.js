import '@/assets/main.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Header from '@/components/Header.vue'
import MenuList from '@/components/MenuList.vue'
import Footer from '@/components/Footer.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 공통 컴포넌트 등록
app
    .component('com-header', Header)
    .component('com-menu-list', MenuList)
    .component('com-footer', Footer)

app.mount('#app')
