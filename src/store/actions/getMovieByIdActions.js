import { GET_MOVIE_BY_ID_INIT, GET_MOVIE_BY_ID_SUCCESS, GET_MOVIE_BY_ID_FAILED } from "../../constants/constants"

export const getMoviesByIdInit = () => {
    return{
        type:GET_MOVIE_BY_ID_INIT,
    }
}


export const getMoviesByIdSuccess = (data) => {

    return{
        type:GET_MOVIE_BY_ID_SUCCESS,
        payload: data,
    }
}

export const getMoviesByIdFailed = (data) => {
    return{
        type:GET_MOVIE_BY_ID_FAILED,
        payload: data,
    }
}