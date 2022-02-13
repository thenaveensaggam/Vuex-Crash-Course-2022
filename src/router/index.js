import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import VuexCounter from "@/components/vuex/VuexCounter";
import VuexEmployees from "@/components/vuex/VuexEmployees";
import VuexUserList from "@/components/vuex/VuexUserList";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/counter',
        name: 'Counter',
        component: VuexCounter
    },
    {
        path: '/employees',
        name: 'Employees',
        component: VuexEmployees
    },
    {
        path: '/users',
        name: 'UserList',
        component: VuexUserList
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
