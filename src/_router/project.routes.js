import ProjectList from "/src/pages/project/ProjectList.vue";

export default [
    {
        path: "/project/",
        children: [
            { path: "list", name: 'ProjectList', component: ProjectList, meta: { title: "프로젝트 관리" } },
        ],
    },
];
