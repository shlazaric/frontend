import { createRouter, createWebHistory } from 'vue-router';

// Welcome page
import WelcomePage from '@/components/WelcomePage.vue';

// User components
import RegisterForm from '@/components/user/RegisterForm.vue';
import UserLoginForm from '@/components/user/UserLoginForm.vue';
import HomePage from '@/components/user/HomePage.vue';
import PetProfileForm from '@/components/user/PetProfileForm.vue';
import AppointmentBooking from '@/components/user/AppointmentBooking.vue';

// Admin components
import AdminLoginForm from '@/components/admin/AdminLoginForm.vue';
import AdminDashboard from '@/components/admin/AdminDashboard.vue';
import AppointmentList from '@/components/admin/AppointmentList.vue';
import PetsList from '@/components/admin/PetsList.vue';

const routes = [
    { path: '/', component: WelcomePage },

    // User routes
    { path: '/register-form', component: RegisterForm },
    { path: '/login-form', component: UserLoginForm },
    { path: '/home-page', component: HomePage },
    { path: '/pet-profile', component: PetProfileForm },
    { path: '/book-appointment', component: AppointmentBooking },

    // Admin routes
    { path: '/admin-login', component: AdminLoginForm },
    { path: '/admin-dashboard', component: AdminDashboard },
    { path: '/appointments-list', component: AppointmentList },
    { path: '/pets-list', component: PetsList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
