import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import switchDemo from './components/switchDemo.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: 'switch', component: switchDemo}]
        },
    ]
})

