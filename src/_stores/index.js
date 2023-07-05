import { defineStore } from 'pinia';
import { http } from "@/_services";

const baseUrl = ``;

const homeStore = defineStore({
    id: "home",
    state: () => ({
    }),
    actions: {
    },
    persist: true,
});

export default homeStore;