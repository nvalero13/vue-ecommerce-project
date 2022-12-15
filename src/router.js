import { createRouter, createWebHistory } from "vue-router";
import Detail from "./pages/Detail.vue";
import Shop from "./pages/Shop.vue";

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
