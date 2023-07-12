import PopupList from "/src/pages/popup/PopupList.vue";
import PopupSetting from "/src/pages/popup/PopupSetting.vue";

export default [
    {
        path: "/popup/",
        children: [
            { path: "list", name: 'PopupList', component: PopupList, meta: { title: "팝업 관리" } },
            { path: "detail", name: 'PopupSetting', component: PopupSetting, meta: { title: "팝업 관리" } },
        ],
    },
];
