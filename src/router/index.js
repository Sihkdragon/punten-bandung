import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TabloidView from "../views/TabloidView.vue";
import TabloidReadView from "../views/TabloidReadView.vue";
import GalleryView from "../views/GalleryView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";
import NotFoundView from "../views/NotFoundView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tabloid",
      name: "tabloid",
      component: TabloidView,
    },
    {
      path: "/tabloid/:id",
      name: "Baca",
      component: TabloidReadView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
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

router.beforeEach(async (to, from, next) => {
  document.title = capitalize(to.name) + " - Punten Bandung";
  next();
});

export default router;
