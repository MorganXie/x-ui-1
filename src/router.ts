import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import switchDemo from './components/switchDemo.vue'
import buttonDemo from './components/buttonDemo.vue'
import tabsDemo from './components/tabsDemo.vue'
import dialogDemo from './components/dialogDemo.vue'
import docDemo from './components/docDemo.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: '', component: docDemo},
                {path: 'switch', component: switchDemo},
                {path: 'button', component: buttonDemo},
                {path: 'tabs', component: tabsDemo},
                {path: 'dialog', component: dialogDemo},
            ]
        },
    ]
})

