'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import PageDashboard from '../pages/PageDashboard';
import PageAbout from '../pages/PageAbout';
import Page404 from '../pages/Page404';
import PageLogin from '../pages/PageLogin';
import AddPaymentForm from '../components/AddPaymentForm';

Vue.use(Router);

const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PageDashboard,
            name: 'Dashboard',
        },
        {
            path: '/dashboard',
            component: PageDashboard,
            name: 'Dashboard',
        },
        {
            path: '/dashboard/:page',
            component: PageDashboard,
            name: 'Dashboard',
        },
        {
            path: '/add/payment/:category/',
            component: AddPaymentForm,
            name: 'AddPaymentFromUrl',
        },
        {
            path: '/about*',
            component: PageAbout,
            name: 'About',
        },
        {
            path: '/404',
            component: Page404,
            name: '404',
        },
        {
            path: '/auth',
            component: PageLogin,
            name: 'Login',
        },
        {
            path: '*',
            component: Page404,
        },
    ],
});

const isAuth = true;
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuth) {
        next({
            name: 'Login',
        });
    } else {
        next();
    }
});

const getTitleByRouteName = routeName => {
    return {
        'Dashboard': 'Page Dashboard',
        'About': 'Page About',
        '404': 'Not Found',
        'Login': 'Page Login',
    }[routeName];
};
router.afterEach((to) => {
    document.title = getTitleByRouteName(to.name);
});

export default router;
