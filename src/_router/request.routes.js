import RequestList from "/src/pages/request/RequestList.vue";
import RequestSetting from "/src/pages/request/RequestSetting.vue";
import RequestDetail from "/src/pages/request/RequestDetail.vue";

export default [
    {
        path: "/request/",
        children: [
            { path: "list", name: 'RequestList', component: RequestList, meta: { title: "신청 콘텐츠 관리" } },
            { path: "setting", name: 'RequestSetting', component: RequestSetting, meta: { title: "신청 콘텐츠 관리" } },
            { path: "detail", name: 'RequestDetail', component: RequestDetail, meta: { title: "신청 콘텐츠 관리" } },
        ],
    },
];
