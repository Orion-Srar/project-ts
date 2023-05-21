const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';
const genres = '/genre/movie/list';
const search = '/search/movie';
const img = 'https://image.tmdb.org/t/p/w500'
const movieById = '/movie';

const urls = {
    movie,
    genres,
    search,
    img,
    movieById: (id: string) => `${movieById}/${id}`
}

export {
    baseURL,
    urls
}