import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: () =>
        import ('../views/Main.vue'),
    redirect: 'home',
    children: [
        // {
        //     path: '/home',
        //     name: 'home',
        //     component: () =>
        //         import ('../views/home/index.vue')
        // }, {
        //     path: '/user',
        //     name: 'user',
        //     component: () =>
        //         import ('../views/user/index.vue')
        // }, {
        //     path: '/mall',
        //     name: 'mall',
        //     component: () =>
        //         import ('../views/mall/index.vue')
        // }, {
        //     path: '/page1',
        //     name: 'page1',
        //     component: () =>
        //         import ('../views/other/pageOne.vue')
        // }, {
        //     path: '/page2',
        //     name: 'page2',
        //     component: () =>
        //         import ('../views/other/pageTwo.vue')
        // }
    ]
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('../views/login/Login.vue')
}]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router