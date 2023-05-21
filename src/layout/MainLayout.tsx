import {FC} from "react";
import {Outlet} from "react-router-dom";

import {HeaderPages} from "../pages";
import css from './MainLayout.module.css';
import {Genres} from "../components";

const MainLayout: FC = () => {
    return (
        <div className={css.MainLayout}>
            <HeaderPages/>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
}