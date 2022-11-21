import { GET_SIMILAR_MOVIE_INIT, GET_SIMILAR_MOVIE_SUCCESS, GET_SIMILAR_MOVIE_FAILED } from "../../constants/constants"

export const getSimilarMoviesInit = () => {
    return{
        type:GET_SIMILAR_MOVIE_INIT,
    }
}


export const getSimilarMoviesSuccess = (data) => {
    return{
        type:GET_SIMILAR_MOVIE_SUCCESS,
        payload: data,
    }
}

export const getSimilarMoviesFailed = (data) => {
    return{
        type:GET_SIMILAR_MOVIE_FAILED,
        payload: data,
    }
}