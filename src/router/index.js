import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Public/HomeView.vue";
import TabloidView from "../views/Public/TabloidView.vue";
import TabloidReadView from "../views/Public/TabloidReadView.vue";
import GalleryView from "../views/Public/GalleryView.vue";
import AboutView from "../views/Public/AboutView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";
import NotFoundView from "../views/Public/NotFoundView.vue";
// User Page Import
import DashboardView from "../views/User/Dashboard.vue";
import WriteTabloidView from "../views/User/WriteTabloidView.vue";
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
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/write",
      name: "tulis",
      component: WriteTabloidView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

router.beforeEach(async (to, from, next) => {
  document.title = capitalize(to.name) + " - Punten Bandung";
  next();
});

export default router;
