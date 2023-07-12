import MemberList from "/src/pages/member/MemberList.vue";
import MemberDetail from "/src/pages/member/MemberDetail.vue";
import BusinessMemberList from "/src/pages/member/BusinessMemberList.vue";
import BusinessMemberDetail from "/src/pages/member/BusinessMemberDetail.vue";

export default [
    {
        path: "/member/",
        children: [
            { path: "member-list", name: 'MemberList', component: MemberList, meta: { title: "회원 관리" } },
            { path: "member-detail", name: 'MemberDetail', component: MemberDetail, meta: { title: "회원 관리" } },
            { path: "business-list", name: 'BusinessMemberList', component: BusinessMemberList, meta: { title: "기업 회원 관리" } },
            { path: "business-detail", name: 'BusinessMemberDetail', component: BusinessMemberDetail, meta: { title: "기업 회원 관리" } },
        ],
    },
];
