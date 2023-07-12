import PaymentList from "/src/pages/payment/PaymentList.vue";
import PaymentSetting from "/src/pages/payment/PaymentSetting.vue";

export default [
    {
        path: "/payment/",
        children: [
            { path: "list", name: 'PaymentList', component: PaymentList, meta: { title: "결제 관리" } },
            { path: "detail", name: 'PaymentSetting', component: PaymentSetting, meta: { title: "결제 관리" } },
        ],
    },
];
