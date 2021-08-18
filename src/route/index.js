import Vue from "vue"
import Router from "vue-router"
import DashBoard from '../views/DashBoard';
import About from '../views/About';
import NotFound from '../views/NotFound';
import addPayment from "@/components/addPayment.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: '/dashboard',
            component: DashBoard,
            name: 'dashboard',
            alias: "/"
        },

        {
            path: '/about',
            component: About,
        },
        {
            path: "/notfound",
            component: NotFound
        },
        {
            path: "*",
            component: NotFound
        },
        {
            path: '/add/payment/:category?',
            component: addPayment
        }

    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})