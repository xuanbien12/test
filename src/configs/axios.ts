import axios from "axios";

export const instanceAxios = axios.create({
    baseURL: ""
})
// instanceAxios.interceptors.request.use(async (config: any) => {
//     const accessToken = localStorage.getItem(TOKEN)
//     if (accessToken) {
//         config.headers = {
//             Authorization: `Bearer ${accessToken}`,
//             Accept: 'application/json , application/msn.api.v1+json',
//         }
//     } else {
//         config.headers = {
//             Accept: 'application/json, application/msn.api.v1+json',
//         }
//     }


//     return config;
// })
// instanceAxios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const config = error.config
//         if (error?.response?.status === 403) {
//             // TODO retrieve jwt token by refresh token
//             const result = await refreshToken(localStorage.getItem(REFRESHTOKEN))
//             if (result) {
//                 config.headers = {
//                     authorization: `Bearer ${result.data?.data?.accessToken}`,
//                 }
//                 localStorage.setItem(
//                     REFRESHTOKEN,
//                     result?.data?.data?.refreshToken
//                 )
//                 localStorage.setItem(
//                     TOKEN,
//                     result?.data?.data?.accessToken
//                 )

//                 return instanceAxios.request(error.config)

//             } else {
//                 localStorage.clear()
//                 window.location.href = "/"
//             }
//         }

//         if (error?.response?.status >= 500) {
//             // localStorage.clear()
//             return error
//         }
//         throw error

//     }
// )