import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.css'
// @ts-ignore
import Home from './components/Home.vue'
import { createWebHashHistory ,createRouter} from 'vue-router'
const history  = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[{path:'/',component:Home}]
})
const app = createApp(App)
app.use(router)
app.mount('#app')

