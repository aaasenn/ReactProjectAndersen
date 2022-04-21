import React from "react";
import css from "./MovieCards.module.css"

const MovieCards = (props) => {
return (
    <div className={css.movie}>
        {props.movies.map((movie) => {
            return (
                <div><img src={movie.Poster}/></div>
            )
        })
        }
    </div>
)
}


export default MovieCards;

