import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IFilm, IResult} from "../interfaces";
import {IFilmById} from "../interfaces/filmById.interface";

const filmService = {
    getAll: (page:string): IRes<IResult<IFilm[]>> => axiosService.get(urls.movie, {params:{page}}),
    getById: (id: string): IRes<IFilmById> => axiosService.get(urls.movieById(id)),
    getAllWithGenre: (genreId:string, page =1):IRes<IResult<IFilm[]>> => axiosService.get(urls.movie, {params:{with_genres:genreId, page}}),
    getAllSearch: (query:string):IRes<IResult<IFilm[]>> => axiosService.get(urls.search, {params:{query}})
}

export {
    filmService
}