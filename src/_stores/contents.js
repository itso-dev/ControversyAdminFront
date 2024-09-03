import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/contents`;

export const useContentsStore = defineStore({
    id: "contents",
    state: () => ({
    }),
    actions: {
        async list(option = {}, pages = { page: 1, page_block: 10 }) {
            let params = {
                ...option,
                ...pages,
            };
            return await http.post(`${baseUrl}/list`, params);
        },
        async getById(id) {
            return await http.get(`${baseUrl}/${id}`);
        },
        async getCnt(id) {
            let params = {contents : id}
            return await http.post(`${baseUrl}/cnt`, params);
        },
        async save(params) {
            return await http.post(`${baseUrl}/save`, params, { headers: { "Content-Type": "multipart/form-data" } });
        },
        async modify(id, params) {
            return await http.put(`${baseUrl}/${id}`, params, { headers: { "Content-Type": "multipart/form-data" } });
        },
        async remove(id) {
            return await http.delete(`${baseUrl}/${id}`);
        },
    },
    persist: true,
});

