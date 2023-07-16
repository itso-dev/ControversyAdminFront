import Index from "/src/pages/Index.vue";
import Login from "/src/pages/Login.vue";

export default [
    {
        path: "/",
        name: "Index",
        component: Index,
        meta: { title: "" },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { title: "로그인" },
    },
];
