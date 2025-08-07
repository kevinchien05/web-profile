import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "home" */ '../views/AboutPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // <-- routes,
});

export default router;