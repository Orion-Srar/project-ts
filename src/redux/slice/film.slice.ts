import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IFilm, IResult} from "../../interfaces";
import {filmService} from "../../services";
import {IFilmById} from "../../interfaces/filmById.interface";

export interface IState {
    page: number;
    movies: IFilm[];
    movie: IFilmById;
    trigger: boolean;
}

const initialState: IState = {
    page: 1,
    movies: [],
    // @ts-ignore
    movie: null,
    trigger: true
};

const getAll = createAsyncThunk<IResult<IFilm[]>, string>(
    'filmSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await filmService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    });

const getAllWithGenre = createAsyncThunk<IResult<IFilm[]>, string>(
    'filmSlice/getAllWithGenre',
    async (genreId, {rejectWithValue}) => {
        try {
            const {data} = await filmService.getAllWithGenre(genreId);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getAllSearch = createAsyncThunk<IResult<IFilm[]>, string>(
    'filmSlice/getAllSearch',
    async (query, {rejectWithValue}) => {
        try {
            const {data} = await filmService.getAllSearch(query);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getById = createAsyncThunk<IFilmById, string>(
    'filmSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await filmService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)

        }
    }
)

const slice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers: {
        getMovie: (state, action) => {
            state.movie = action.payload;
        },
        nextPage: (state) => {
            state.page = state.page + 1
        },
        prevPage: (state) => {
            state.page = state.page - 1
        },
        changeTrigger: state => {
            state.trigger = !state.trigger
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addMatcher(isFulfilled(getAll, getAllWithGenre, getAllSearch), (state, action) => {
                const {results} = action.payload;
                state.movies = results;

            })


});

const {reducer: filmReducer, actions} = slice;

const filmActions = {
    ...actions,
    getAll,
    getAllWithGenre,
    getAllSearch,
    getById
}

export {
    filmReducer,
    filmActions
}