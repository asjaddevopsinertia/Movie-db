import { combineReducers } from "redux";
import { getMoviesReducer } from "./getMoviesReducer";
import { getMoviesByIdReducer } from "./getMovieByIdReducer";
import { getMoviesBySearchReducer } from "./getMoviesBySearchReducer";
import { getMovieCreditReducer } from "./getMovieCreditReducer";
import { getSimilarMoviesReducer } from "./getSimilarMoviesReducer";


const reducers = combineReducers({
    movies: getMoviesReducer,
    movieById : getMoviesByIdReducer,
    moviesBySearch : getMoviesBySearchReducer,
    movieCredit : getMovieCreditReducer,
    similarMovies: getSimilarMoviesReducer
})

export default reducers