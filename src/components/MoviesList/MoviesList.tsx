import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {filmActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MoviesList.module.css';
import {NavigatePage} from "../../pages/NavigatePage";

const MoviesList: FC = () => {
    const {movies, page, trigger} = useAppSelector(state => state.filmReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(filmActions.getAll(page.toString()))
    }, [page])

    return (
        <>
            <div className={trigger ? css.MoviesList_white : css.MoviesList}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <NavigatePage/>
        </>
    );
};

export {
    MoviesList
}





