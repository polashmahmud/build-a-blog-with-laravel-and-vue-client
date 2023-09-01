import {ref} from "vue";
import axios from "axios";

export default function useAdminPosts(uuid) {
    const posts = ref([]);
    const post = ref({});

    const fetchPosts = async () => {
        let response = await axios.get('/api/admin/posts');

        posts.value = response.data.data
    }

    const fetchPost = async () => {
        let response = await axios.get(`/api/posts/${uuid}`);

        post.value = response.data.data
    }

    return {
        posts,
        post,
        fetchPosts,
        fetchPost
    }
}