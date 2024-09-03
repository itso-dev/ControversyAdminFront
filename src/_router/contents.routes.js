import ContentsList from "/src/pages/contents/ContentsList.vue";
import ContentsSetting from "/src/pages/contents/ContentsSetting.vue";
import ContentsDetail from "/src/pages/contents/ContentsDetail.vue";

export default [
    {
        path: "/contents/",
        children: [
            { path: "list", name: 'ContentsList', component: ContentsList, meta: { title: "콘텐츠 관리" } },
            { path: "setting", name: 'ContentsSetting', component: ContentsSetting, meta: { title: "콘텐츠 관리" } },
            { path: "detail", name: 'ContentsDetail', component: ContentsDetail, meta: { title: "콘텐츠 관리" } },
        ],
    },
];
