import { GET_MOVIE_BY_ID_FAILED, GET_MOVIE_BY_ID_INIT, GET_MOVIE_BY_ID_SUCCESS } from "../../constants/constants";

export const getMoviesByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_MOVIE_BY_ID_INIT:
			return { loading: true };

		case GET_MOVIE_BY_ID_SUCCESS:
			return { loading: false, movies: action.payload };

		case GET_MOVIE_BY_ID_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};