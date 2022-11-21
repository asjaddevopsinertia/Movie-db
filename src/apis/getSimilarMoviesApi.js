import axios from "axios";
import { API_PREFIX } from "../constants/constants";

import { getSimilarMoviesSuccess, getSimilarMoviesFailed, getSimilarMoviesInit } from "../store/actions/getSimilarMoviesActions";


  export const fetchSimilarMovies = (id) => {
	return (dispatch) => {
		dispatch(getSimilarMoviesInit())
		axios.get(
            `${API_PREFIX}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
        )
		.then((data) => {
			dispatch(getSimilarMoviesSuccess(data))
		})
		.catch((err) => getSimilarMoviesFailed(err));
	};
  };