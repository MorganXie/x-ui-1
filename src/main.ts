import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc},
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')

