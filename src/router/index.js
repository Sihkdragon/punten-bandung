import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Navbar from "../components/complex/Navbar.vue";
import Footer from "../components/complex/Footer.vue";
import Sidebar from "../components/complex/Sidebar.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: () => HomeView,
        Navbar: () => Navbar,
        Footer: () => Footer,
        Sidebar: () => Sidebar,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

router.beforeEach((to, from, next) => {
  document.title = capitalize(to.name) + " - Punten Bandung";
  next();
});

export default router;
