import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from "./home.routes.js";
import MemberRoutes from "./member.routes.js";
import BannerRoutes from "./banner.routes.js";
import PopupRoutes from "./popup.routes.js";
import PaymentRoutes from "./payment.routes.js";
import BlacklistRoutes from "./blacklist.routes.js";
import store from "@/_stores";

const routes = [
        ...HomeRoutes,
        ...MemberRoutes,
        ...BannerRoutes,
        ...PopupRoutes,
        ...PaymentRoutes,
        ...BlacklistRoutes,
    { path: "/:pathMatch(.*)*", redirect: "/" },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

export default router
