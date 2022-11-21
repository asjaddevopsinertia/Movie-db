import { GET_MOVIES_INIT, GET_MOVIES_SUCCESS, GET_MOVIES_FAILED } from "../../constants/constants"

export const getMoviesInit = () => {
    return{
        type:GET_MOVIES_INIT,
    }
}


export const getMoviesSuccess = (data) => {
    return{
        type:GET_MOVIES_SUCCESS,
        payload: data,
    }
}

export const getMoviesFailed = (data) => {
    return{
        type:GET_MOVIES_FAILED,
        payload: data,
    }
}