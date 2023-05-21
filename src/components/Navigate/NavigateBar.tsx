import css from './NavigateBar.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {filmActions} from "../../redux";

const NavigateBar = () => {
    const {page, trigger} = useAppSelector(state => state.filmReducer);
    const dispatch = useAppDispatch();

    const nextPage =  () => {
        dispatch(filmActions.nextPage())
    }

    const prevPage = () => {
        dispatch(filmActions.prevPage())
    }

    return (
        <div className={trigger?css.navigate_white : css.navigate}>
            <button onClick={prevPage} disabled={!(page-1)} >PREVIOUS</button>
            <button onClick={nextPage} disabled={!(page-500)}>NEXT</button>

        </div>
    );
};

export {
    NavigateBar
}