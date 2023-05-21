import React, {FC} from 'react';
import {Link} from "react-router-dom";
import StarRatings from 'react-star-ratings';

import {IFilm} from "../../interfaces";
import {urls} from "../../constants";
import css from './MovieListCard.module.css';
import {useAppSelector} from "../../hooks";

interface IProps {
    movie: IFilm
}

const MovieListCard: FC<IProps> =  ({movie}) => {
    const {trigger} = useAppSelector(state => state.filmReducer);
    const {title, poster_path, vote_average, id} = movie;

    return (

        <div className={trigger? css.Card_wrap_white : css.Card_wrap}>
            <Link to={id.toString()}>
                <img src={`${urls.img}${poster_path}`} alt={title}/>
            </Link>
            <div>
                <div>{title}</div>
                <StarRatings
                    rating={vote_average}
                    starRatedColor={'gold'}
                    starEmptyColor={'darkgray'}
                    numberOfStars={10}
                    starDimension={'12px'}
                    starSpacing={'3px'}
                />
            </div>
        </div>
    );
};

export {
    MovieListCard
}





