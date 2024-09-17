import { createRouter, createWebHistory } from 'vue-router';
import Header from '@/components/Header.vue';
import Login from '@/components/Login.vue';
import Formulario from '@/components/Formulario.vue';

const routes = [
  { path: '/header', component: Header },
  { path: '/login', component: Login },
  { path: '/formulario', component: Formulario }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
