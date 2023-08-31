import axios from "axios";
import {computed, reactive} from "vue";

const state = reactive({
    authenticated: false,
    user: {}
})

export default function useAuth() {
    const getAuthenticated = computed(() => state.authenticated)
    const getUser = computed(() => state.user)

    const setAuthenticate = (authenticated) => {
      state.authenticated = authenticated
    }

    const setUser = (user) => {
        state.user = user
    }

   const attempt = async () => {
       try {
           let response = await axios.get('/api/user');
           setAuthenticate(true)
           setUser(response.data)

           return response;
       } catch (e) {
           // errors
       }
   }

    const login = async (credentials) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login', credentials)
            await attempt()
        } catch (e) {
            // validation errors
        }
    }

    return {
        login,
        getUser,
        getAuthenticated,
        attempt
    }
}