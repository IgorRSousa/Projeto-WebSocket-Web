import { createRouter, createWebHistory } from 'vue-router'

const About = { template: '<div>About</div>' }

const routes = [
    // Modelo de Rota
    { path: '/login', name: "login", component: () => import('../views/login.vue')}, 
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;