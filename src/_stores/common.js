import { defineStore } from 'pinia';
import { http } from "@/_services";
import router from '@/_router';
import dayjs from 'dayjs';

const baseUrl = `/member`;
const level_list = [
    { idx: 0, maxLevel:40, requiredExp: 1200 },
    { idx: 1, maxLevel:80, requiredExp: 3600 },
    { idx: 2, maxLevel:100, requiredExp: 9600 },
]

export const useCommonStore = defineStore({
    id: 'common',
    state: () => ({
        member: null,
        loginCheck:false,
        auth_token: "",
        expiryTime: "",
        isAuthenticated: false,
        return_url: null,
        field: null,
        member_info_list: [],
    }),
    actions: {
        async login(id, password, auto_login) {
            try {
                const member = await http.post(`${baseUrl}/login`, { id:id, password:password,auto_login:auto_login }).then((resp) => {
                    console.log(id);
                    if (resp.data.code === 200) {
                        if(resp.data.body.member.role !== 'ROLE_ADMIN'){ // 관리자 아님
                            this.loginCheck = true;
                            return resp;
                        } else {
                            this.member = resp.data.body.member;
                            this.auth_token = resp.data.body.token;
                            this.isAuthenticated = true;
                            this.expiryTime = dayjs(new Date()).add(resp.data.body.expiryHour, 'hour').format('YYYY-MM-DD HH:mm:ss');
                            this.loginCheck = false;
                            router.push(this.return_url || '/');
                        }
                    }else{
                        this.loginCheck = true;
                        return resp;
                    }
                });
                return member;
                // redirect to previous url or default to home page
            } catch (error) {
                this.loginCheck = true;
                console.log("error user auth", error);
            }
        },
        async refresh() {
            try {
                const member = await http.get(`${baseUrl}/${this.member.member}`).then((resp) => {
                    if (resp.data.code === 200) {
                        this.member = resp.data.body;
                    }else{
                        return resp;
                    }
                });
                return member;
                // redirect to previous url or default to home page
            } catch (error) {
                console.log("error user auth", error);
            }
        },
        logout() {
            this.member = null;
            this.field = null;
            this.auth_token = "";
            this.isAuthenticated = false;
            this.expiryTime = "";
            this.return_url = null;
            this.loginCheck = false;
            router.push('/login');
        },
        setReturnUrl(url){
            this.return_url = url;
        },
    },
    persist: true,
});
