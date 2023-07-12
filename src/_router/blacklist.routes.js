import BlackList from "/src/pages/blacklist/BlackList.vue";
import BlackSetting from "/src/pages/blacklist/BlackDetail.vue";

export default [
    {
        path: "/blacklist/",
        children: [
            { path: "list", name: 'BlackList', component: BlackList, meta: { title: "블랙리스트 관리" } },
            { path: "detail", name: 'BlackSetting', component: BlackSetting, meta: { title: "블랙리스트 관리" } },
        ],
    },
];
