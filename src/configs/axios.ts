import axios from "axios";

export const instanceAxios = axios.create({
    baseURL: "http://webtest.autotron.vn:81/api"
})
instanceAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error?.response?.status === 401) {
            localStorage.clear()
            window.location.href = "/login"
        }
        throw error
    }
)