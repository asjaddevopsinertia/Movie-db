import { GET_MOVIE_BY_SEARCH_FAILED, GET_MOVIE_BY_SEARCH_INIT, GET_MOVIE_BY_SEARCH_SUCCESS } from "../../constants/constants";

export const getMoviesBySearchReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_MOVIE_BY_SEARCH_INIT:
			return { loading: true };

		case GET_MOVIE_BY_SEARCH_SUCCESS:
			return { loading: false, movies: action.payload };

		case GET_MOVIE_BY_SEARCH_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};