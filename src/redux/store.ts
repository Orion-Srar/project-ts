import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {filmReducer, genreReducer} from "./slice";

const rootReducer = combineReducers({
    filmReducer,
    genreReducer,
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}
