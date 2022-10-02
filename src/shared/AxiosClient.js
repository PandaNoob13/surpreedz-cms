import axios from "axios"
import AuthHeaderInterceptor from "./AuthHeaderInterceptors"

export const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
}) 

clientInstance.interceptors.request.use(AuthHeaderInterceptor)