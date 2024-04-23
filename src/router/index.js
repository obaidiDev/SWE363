import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import MyFreelancers from '../components/MyFreelancers.vue';
import UserProfile from "../363 p/UserProfile.vue";
const routes = [
  {
    path: '',
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
  }
];
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;