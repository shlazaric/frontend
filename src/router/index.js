import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'

// User views
import RegisterForm from '@/views/User/RegisterForm.vue'
import UserLoginForm from '@/views/User/UserLoginForm.vue'
import PetForm from '@/views/User/PetProfileForm.vue'
import AppointmentBooking from '@/views/User/AppointmentBooking.vue'
import Home from '@/views/User/HomePage.vue'
import EditPetProfile from '@/views/User/EditPetProfile.vue'

// Admin views
import AdminLoginForm from '@/views/Admin/AdminLoginForm.vue'
import AdminDashboard from '@/views/Admin/AdminDashboard.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomePage },
  { path: '/register', name: 'Register', component: RegisterForm },
  { path: '/login', name: 'Login', component: UserLoginForm },
  { path: '/home', name: 'Home', component: Home },
  { path: '/pet-profile', name: 'PetProfileForm', component: PetForm },
  { path: '/book-appointment', name: 'AppointmentBooking', component: AppointmentBooking },
  { path: '/admin-login', name: 'AdminLogin', component: AdminLoginForm },
  { path: '/edit-pet', name: 'EditPetProfile', component: EditPetProfile },
  { path: '/admin-dashboard', name: 'AdminDashboard', component: AdminDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
