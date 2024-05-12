import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import MyFreelancers from '../components/MyFreelancers.vue';
import UserProfile from "../components/UserProfile.vue";
import register from '../components/register.vue';
import report from "../components/report.vue";
import Login from '../components/login.vue';
const routes = [
  {
    path: '/',
    redirect: '/MainPage'
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/MyFreelancers',
    name: 'MyFreelancers',
    component: MyFreelancers
  },
  {
    path: "/UserProfile",
    name: "UserProfile",
    component: UserProfile
  },
  {    
    path: "/login",
    name: "login",
    component: Login
  },
  {    
    path: "/register",
    name: "register",
    component: register
  },
  {    
    path: "/report",
    name: "report",
    component: report
  },
];
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;