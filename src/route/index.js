import Vue from "vue"
import Router from "vue-router"
// import DashBoard from '../views/DashBoard';
// import About from '../views/About';
// import NotFound from '../views/NotFound';
// import addPayment from "@/components/addPayment.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: '/calc',
            component: () => import('../components/calc.vue')
        },
        {
            path: '/dashboard',
            component: () => import('../views/DashBoard.vue'),
            name: 'dashboard',
            alias: "/"
        },


        {
            path: '/about',
            component: () => import('../views/About.vue'),
        },
        {
            path: "/notfound",
            component: () => import('../views/NotFound.vue'),
        },
        {
            path: "*",
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/add/payment/:category?',
            component: () => import('@/components/addPayment.vue'),
        }

    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})