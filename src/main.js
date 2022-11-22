import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/main.css";
import VueCookies from "vue-cookies";
const app = createApp(App);

app.use(router);
app.use(AOS.init());
app.use(VueCookies, { expires: "1d" });
app.mount("#app");
