import { instanceAxios } from "../configs/axios";

export const login = (body: any) => instanceAxios.post("/gettokenadmin", body)

