import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import axios from "axios";
import useAuth from "./auth/useAuth.js";

const { attempt } = useAuth()

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const app = createApp(App)
app.use(router)

attempt().then(() => {
    app.mount('#app')
})


