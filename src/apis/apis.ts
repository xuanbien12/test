import { instanceAxios } from "../configs/axios";

export const login = (body: any) => instanceAxios.post("/gettokenadmin", body)
export const profile = (body: any) => instanceAxios.post("/getuserinfo", body)
export const logout = (body: any) => instanceAxios.post("/logout", body)
export const changePassword = (body: any) => instanceAxios.post("/changepassadmin", body)
export const OTP = (body: any) => instanceAxios.post("/getotp", body)
export const getToken = (body: any) => instanceAxios.post("/gettoken", body)
export const listDevice = (body: any) => instanceAxios.post("/listdevice", body)
