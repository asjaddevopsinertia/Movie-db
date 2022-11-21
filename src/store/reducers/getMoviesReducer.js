import { GET_MOVIES_FAILED, GET_MOVIES_INIT, GET_MOVIES_SUCCESS } from "../../constants/constants";

export const getMoviesReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_MOVIES_INIT:
			return { loading: true };

		case GET_MOVIES_SUCCESS:
			return { loading: false, movies: action.payload };

		case GET_MOVIES_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};