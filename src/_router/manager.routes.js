import ManagerList from "/src/pages/manager/ManagerList.vue";
import ManagerSetting from "/src/pages/manager/ManagerSetting.vue";

export default [
    {
        path: "/manager/",
        children: [
            { path: "list", name: 'ManagerList', component: ManagerList, meta: { title: "담당자 관리" } },
            { path: "setting", name: 'ManagerSetting', component: ManagerSetting, meta: { title: "담당자 관리" } },
        ],
    },
];
