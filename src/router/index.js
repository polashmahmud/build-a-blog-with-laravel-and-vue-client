import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Post from "../pages/Post.vue";
import Login from "../pages/Login.vue";
import AdminPost from "../pages/admin/Post.vue";
import useAuth from "../auth/useAuth.js";

const {getAuthenticated: authenticated} = useAuth()

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/posts/:slug',
        name: 'post',
        component: Post,
        props: true
    },
    {
        path: '/admin/login',
        name: 'login',
        component: Login
    },
    {
        path: '/admin/posts',
        name: 'admin.post',
        component: AdminPost
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})