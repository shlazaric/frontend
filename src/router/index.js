import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import RegisterForm from '@/views/RegisterForm.vue'
import UserLoginForm from '@/views/UserLoginForm.vue'
import AdminLoginForm from '@/views/AdminLoginForm.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomePage },
  { path: '/register', name: 'Register', component: RegisterForm },
  { path: '/login', name: 'Login', component: UserLoginForm },
  { path: '/admin-login', name: 'AdminLogin', component: AdminLoginForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
