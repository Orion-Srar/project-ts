import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Badge from "react-bootstrap/Badge"

import {useAppDispatch, useAppSelector} from "../../hooks";
import {filmActions} from "../../redux";
import {urls} from "../../constants";
import css from './MovieInfo.module.css';
import StarRatings from "react-star-ratings";


const MovieInfo: FC = () => {
    const {movie} = useAppSelector(state => state.filmReducer);
    const dispatch = useAppDispatch();

    const {pathname} = useLocation();
    const id = pathname.slice(7);

    useEffect(() => {
        dispatch(filmActions.getById(id))
    }, [])

    const strings = movie?.genres.map(genre => genre.name);


    return (

        <div>
            {movie &&
                <div className={css.wrap}>
                    <div className={css.background}>
                        <img src={`${urls.img}${movie.backdrop_path}`} alt={movie.title}/>
                    </div>
                    <div className={css.img}>
                        <img src={`${urls.img}${movie.poster_path}`} alt={movie.title}/>
                    </div>
                    <div className={css.text_container}>
                        <div
                            className={css.title}>{movie.original_title} ({new Date(movie.release_date).getFullYear()})
                        </div>
                        <div style={{marginBottom: "20px"}}>{strings.map((ganre, index) => <Badge
                            className={css.badge}
                            key={index}>{ganre}</Badge>)}</div>
                        <div style={{fontSize: "20px"}}>Rating</div>
                        <StarRatings
                            rating={movie.vote_average}
                            starRatedColor={'gold'}
                            starEmptyColor={'darkgray'}
                            numberOfStars={10}
                            starDimension={'12px'}
                            starSpacing={'3px'}
                        />
                        <div style={{fontSize: "20px", marginTop: "25px"}}>Overview</div>
                        <div style={{paddingRight: "60px", marginTop: "10px"}}>{movie.overview}</div>
                    </div>
                </div>
            }
        </div>
    );
};

export {
    MovieInfo
}





