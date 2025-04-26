import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/components/WelcomePage.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import UserLoginForm from '@/components/UserLoginForm.vue'
import AdminLoginForm from '@/components/AdminLoginForm.vue'

const routes = [
    { path: '/', component: WelcomePage },
    { path: '/register', component: RegisterForm },
    { path: '/login', component: UserLoginForm },
    { path: '/admin-login', component: AdminLoginForm },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
