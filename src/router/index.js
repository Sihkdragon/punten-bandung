import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TabloidView from "../views/TabloidView.vue";
import TabloidReadView from "../views/TabloidReadView.vue";
import GalleryView from "../views/GalleryView.vue";
import AboutView from "../views/AboutView.vue";
import NotFoundView from "../views/NotFoundView.vue";
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
      path: "/tabloid",
      name: "tabloid",
      components: {
        main: () => TabloidView,
        Navbar: () => Navbar,
        Footer: () => Footer,
        Sidebar: () => Sidebar,
      },
    },
    {
      path: "/tabloid/:id",
      name: "Baca",
      components: {
        main: () => TabloidReadView,
        Navbar: () => Navbar,
        Footer: () => Footer,
        Sidebar: () => Sidebar,
      },
    },
    {
      path: "/gallery",
      name: "gallery",
      components: {
        main: () => GalleryView,
        Navbar: () => Navbar,
        Footer: () => Footer,
        Sidebar: () => Sidebar,
      },
    },
    {
      path: "/about",
      name: "about",
      components: {
        main: () => AboutView,
        Navbar: () => Navbar,
        Footer: () => Footer,
        Sidebar: () => Sidebar,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: NotFoundView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
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
