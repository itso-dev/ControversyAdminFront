import FaqList from "/src/pages/faq/FaqList.vue";
import FaqSetting from "/src/pages/faq/FaqSetting.vue";

export default [
    {
        path: "/faq/",
        children: [
            { path: "list", name: 'FaqList', component: FaqList, meta: { title: "FAQ 관리" } },
            { path: "setting", name: 'FaqSetting', component: FaqSetting, meta: { title: "FAQ 관리" } },
        ],
    },
];
