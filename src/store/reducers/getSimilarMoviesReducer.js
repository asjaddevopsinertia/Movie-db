import { GET_SIMILAR_MOVIE_INIT, GET_SIMILAR_MOVIE_SUCCESS, GET_SIMILAR_MOVIE_FAILED } from "../../constants/constants";

export const getSimilarMoviesReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_SIMILAR_MOVIE_INIT:
			return { loading: true };

		case GET_SIMILAR_MOVIE_SUCCESS:
			return { loading: false, movies: action.payload };

		case GET_SIMILAR_MOVIE_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};