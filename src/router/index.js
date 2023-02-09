import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/",
    name: "Nosotros",
    hash: "#nosotros",
    component: Home,
  },
  {
    path: "/marcas",
    name: "Marcas",
    component: () => import("../views/Brands.vue"),
  },
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/",
    name: "Servicios",
    hash: "#servicios",
    component: Home,
  },
  {
    path: "/",
    name: "Contacto",
    hash: "#contacto",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to === undefined) {
      console.log("to", to);
      console.log("from", from);
      console.log("savedPosition", savedPosition);
    }
    if (to.hash) {
      return { el: to.hash };
    }
  },
});

export default router;
