import { GET_MOVIE_CREDIT_INIT, GET_MOVIE_CREDIT_SUCCESS, GET_MOVIE_CREDIT_FAILED } from "../../constants/constants";

export const getMovieCreditReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_MOVIE_CREDIT_INIT:
			return { loading: true };

		case GET_MOVIE_CREDIT_SUCCESS:
			return { loading: false, movie: action.payload };

		case GET_MOVIE_CREDIT_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};