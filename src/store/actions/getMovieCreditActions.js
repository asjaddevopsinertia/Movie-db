import { GET_MOVIE_CREDIT_INIT, GET_MOVIE_CREDIT_SUCCESS, GET_MOVIE_CREDIT_FAILED } from "../../constants/constants"

export const getMovieCreditInit = () => {
    return{
        type:GET_MOVIE_CREDIT_INIT,
    }
}


export const getMovieCreditSuccess = (data) => {

    return{
        type:GET_MOVIE_CREDIT_SUCCESS,
        payload: data,
    }
}

export const getMovieCreditFailed = (data) => {
    return{
        type:GET_MOVIE_CREDIT_FAILED,
        payload: data,
    }
}