import { createWebHistory, createRouter } from "vue-router";

// Components
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import Begin from '@/views/begin.vue'
import RecoverPwd from '@/views/recover-pwd.vue'
import TermsAndConditions from '@/views/terms-and-conditions.vue'


const routes = [
  {
    path: "/",
    name: "Begin",
    component: Begin,
  },
  {
    path: "/begin",
    redirect: '/',
  },
  {
    path: "/register",
    name: "Register",
    component: Register
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
  {
    path: "/terms-and-conditions",
    name: "Terms and conditions",
    component: TermsAndConditions,
  },
  {
    path: "/recover-pwd",
    name: "Recover Password",
    component: RecoverPwd,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;