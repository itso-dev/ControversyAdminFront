import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from "./home.routes.js";
import MemberRoutes from "./member.routes.js";
import BannerRoutes from "./banner.routes.js";
import PopupRoutes from "./popup.routes.js";
import PaymentRoutes from "./payment.routes.js";
import BlacklistRoutes from "./blacklist.routes.js";
import BoardRoutes from "./board.routes.js";
import ContactRoutes from "./contact.routes.js";
import NoticeRoutes from "./notice.routes.js";
import AlertRoutes from "./alert.routes.js";
import FaqRoutes from "./faq.routes.js";
import ProjectRoutes from "./project.routes.js";
import ManagerRoutes from "./manager.routes.js";
import store from "@/_stores";

const routes = [
        ...HomeRoutes,
        ...MemberRoutes,
        ...BannerRoutes,
        ...PopupRoutes,
        ...PaymentRoutes,
        ...BlacklistRoutes,
        ...BoardRoutes,
        ...ContactRoutes,
        ...NoticeRoutes,
        ...AlertRoutes,
        ...FaqRoutes,
        ...ProjectRoutes,
        ...ManagerRoutes,
    { path: "/:pathMatch(.*)*", redirect: "/" },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

export default router
