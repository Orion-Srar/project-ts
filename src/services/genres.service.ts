import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IResolve} from "../redux";

const genresService = {
    getAll: (): IRes<IResolve> => axiosService.get(urls.genres)
}

export {
    genresService
}