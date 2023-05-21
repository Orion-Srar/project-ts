import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {filmActions, genreActions} from "../../redux";
import css from './Genres.module.css'

const Genres = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const {trigger} = useAppSelector(state => state.filmReducer);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])


    const setGenre = (id: number) => {
        dispatch(filmActions.getAllWithGenre(id.toString()))
    }

    return (
        <div className={trigger ? css.Genres_white : css.Genres}>
            {genres.map(genre =>
                <div key={genre.id} className={trigger ? css.genre_white : css.genre}
                     onClick={() => setGenre(genre.id)}>{genre.name}</div>
            )}
        </div>
    );
};

export {
    Genres
}