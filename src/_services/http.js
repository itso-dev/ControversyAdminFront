import axios from "axios";
import { useCommonStore } from '@/_stores';

export const http = axios.create({
    baseURL: "https://api.vsday.xyz",
    headers: {
        "Content-Type": "application/json",
    },
});

http.interceptors.request.use(
    (resp) => {
        // console.log("http request", resp);
        const commonStore = useCommonStore();

        const isAuthenticated = commonStore.isAuthenticated;
        const matches = resp.url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        const domain = matches && matches[1];
        if (isAuthenticated) {
            const token = commonStore.auth_token;
            resp.headers.Authorization = `Bearer ${token}`;
        }
        return resp;
    },
    (error) => {
        // Do something with request error
        Promise.reject(error);
    }
);
http.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
