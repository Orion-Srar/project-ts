import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon, faFilm} from "@fortawesome/free-solid-svg-icons";


import css from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {filmActions} from "../../redux";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const {trigger} = useAppSelector(state => state.filmReducer);
    const {register, handleSubmit, reset} = useForm({mode: "all"});

    const save: SubmitHandler<any> = (params) => {
        const {search} = params;
        dispatch(filmActions.getAllSearch(search))
        reset()
    }

    const switchTrigger = () => {
        dispatch(filmActions.changeTrigger())
    }

    return (
        <div>
            <div className={trigger ? css.Header_white : css.Header}>
                <div className={css.container}>
                    <div className={css.naw_wrapper}>
                        <a href="/" className={trigger ? css.box_logo_white : css.box_logo}>
                            <FontAwesomeIcon icon={faFilm} style={{color: "#ee0b0b",}}/>
                            MovieUA
                        </a>
                    </div>
                    <form onSubmit={handleSubmit(save)}>
                        <input type="text" placeholder={'Search...'} {...register('search')}
                               className={trigger ? css.input_white : css.input}/>
                    </form>
                    <div className={css.flex}>
                        <div className={css.avatar}>
                            <img src="https://www.themoviedb.org/t/p/w150_and_h150_face/3mwdGMcAK6yn1XI3Kj1JfxDgdqM.jpg"
                                 alt="avatar"/>
                        </div>
                        <div onClick={switchTrigger}>
                            {trigger ?
                                <FontAwesomeIcon icon={faMoon}
                                                 style={{color: "gold", height: "25px", cursor: "pointer"}}/> :
                                <FontAwesomeIcon icon={faSun}
                                                 style={{color: "#f0e800", height: "25px", cursor: "pointer"}}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    Header
}