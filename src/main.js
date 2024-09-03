import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./_router";
import App from './App.vue'
import './style.css'
import "./index.css";
import globalMixin from "./_mixins/globalMixin";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)
    .mixin(globalMixin)
app.mount('#app')
