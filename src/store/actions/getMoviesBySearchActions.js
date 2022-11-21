import { GET_MOVIE_BY_SEARCH_INIT, GET_MOVIE_BY_SEARCH_SUCCESS, GET_MOVIE_BY_SEARCH_FAILED } from "../../constants/constants"

export const getMoviesBySearchInit = () => {
    return{
        type:GET_MOVIE_BY_SEARCH_INIT,
    }
}


export const getMoviesBySearchSuccess = (data) => {

    return{
        type:GET_MOVIE_BY_SEARCH_SUCCESS,
        payload: data,
    }
}

export const getMoviesBySearchFailed = (data) => {
    return{
        type:GET_MOVIE_BY_SEARCH_FAILED,
        payload: data,
    }
}