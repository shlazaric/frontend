import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/components/WelcomePage.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import UserLoginForm from '@/components/UserLoginForm.vue'
import AdminLoginForm from '@/components/AdminLoginForm.vue'
import PetProfileForm from '@/components/PetProfileForm.vue'
import AppointmentBooking from '@/components/AppointmentBooking.vue'
import HomePage from '@/components/HomePage.vue' // dodaj ovo!

const routes = [
    { path: '/', component: WelcomePage },
    { path: '/register', component: RegisterForm },
    { path: '/login', component: UserLoginForm },
    { path: '/admin-login', component: AdminLoginForm },
    { path: '/home', component: HomePage },
    { path: '/pet-profile', component: PetProfileForm }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
