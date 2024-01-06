import { createRouter, createWebHistory } from 'vue-router'

const About = { template: '<div>About</div>' }

const routes = [
    // Modelo de Rota
    // { path: '/', name: "Home", component: () => import('../views/home.vue')}, 
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;