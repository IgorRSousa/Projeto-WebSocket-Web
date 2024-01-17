import { createRouter, createWebHistory } from 'vue-router'

const About = { template: '<div>About</div>' }

const routes = [
    // Modelo de Rota
    { path: '/login', name: "login", component: () => import('../views/login.vue') },
    { path: '/', name: "home", component: () => import('../views/home.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('Token')

    if (to.name === 'login' && isAuthenticated) {
        localStorage.removeItem('Token');
        localStorage.removeItem('Usuario');
        
    }

    if (to.name !== 'login' && !isAuthenticated) {
        alert('Acesso não autorizado')
        next({ name: 'login' })
    } else next()
})

export default router;