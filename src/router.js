import { createWebHistory, createRouter } from "vue-router";

// Components
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'


const routes = [
  {
    path: "/",
    name: "Register",
    component: Register,
  },
  {
    path: "/register",
    redirect: '/',
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;