import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'

// User views
import RegisterForm from '@/views/User/RegisterForm.vue'
import UserLoginForm from '@/views/User/UserLoginForm.vue'
import PetForm from '@/views/User/PetProfileForm.vue'
import AppointmentBooking from '@/views/User/AppointmentBooking.vue'

// Admin views
import AdminLoginForm from '@/views/Admin/AdminLoginForm.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomePage },
  { path: '/register', name: 'Register', component: RegisterForm },
  { path: '/login', name: 'Login', component: UserLoginForm },
  { path: '/pet-profile', name: 'PetProfileForm', component: PetForm },
  { path: '/admin-login', name: 'AdminLogin', component: AdminLoginForm },
  { path: '/book-appointment', name: 'AppointmentBooking', component: AppointmentBooking }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
