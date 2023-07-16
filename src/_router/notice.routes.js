import NoticeList from "/src/pages/notice/NoticeList.vue";
import NoticeSetting from "/src/pages/notice/NoticeSetting.vue";

export default [
    {
        path: "/notice/",
        children: [
            { path: "list", name: 'NoticeList', component: NoticeList, meta: { title: "공지사항 관리" } },
            { path: "detail", name: 'NoticeSetting', component: NoticeSetting, meta: { title: "공지사항 관리" } },
        ],
    },
];
