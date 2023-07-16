import AlertList from "/src/pages/alert/AlertList.vue";
import AlertSetting from "/src/pages/alert/AlertSetting.vue";

export default [
    {
        path: "/alert/",
        children: [
            { path: "list", name: 'AlertList', component: AlertList, meta: { title: "알림 관리" } },
            { path: "setting", name: 'AlertSetting', component: AlertSetting, meta: { title: "알림 관리" } },
        ],
    },
];
