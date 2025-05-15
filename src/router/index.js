import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/WelcomePage.vue';
import RegisterForm from '@/views/RegisterForm.vue';
import Login from '@/views/UserLoginForm.vue';

const routes = [

  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
