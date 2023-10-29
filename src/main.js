import '@/assets/main.css'

// // bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'

// primevue
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
//core
import "primevue/resources/primevue.min.css";
// primeicons
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import Header from '@/components/main/Header.vue'
import MenuList from '@/components/main/MenuList.vue'
import Footer from '@/components/main/Footer.vue'

const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(PrimeVue)

// 공통 컴포넌트 등록
app
    .component('ComHeader', Header)
    .component('comMenuList', MenuList)
    .component('ComFooter', Footer)

// router
router.beforeEach((to, from) => {
    document.title = to.meta.title;
})

app.mount('#app')
