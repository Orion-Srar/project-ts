import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import { MoviesListPages} from "./pages";
import {MovieInfo} from "./components";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviesListPages/>}/>
                <Route path={'movie/:id'} element={<MovieInfo/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
}
