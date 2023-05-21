import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genresService} from "../../services";

export interface IResolve {
    genres: IGenre[],
}

const initialState: IResolve = {
    genres: [],
}

const getAll = createAsyncThunk<IResolve, void>(
    'genreSlice/getAll',
    async (arg, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response)
        }
    }
)

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres;
            })
});

const {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreActions
}