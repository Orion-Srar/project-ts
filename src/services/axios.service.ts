import axios from "axios";
import {baseURL, token} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(config => {
    config.headers.Authorization = token
    return config
})

export {
    axiosService
}