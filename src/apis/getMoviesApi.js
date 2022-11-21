import axios from "axios";
import { API_PREFIX } from "../constants/constants";
import {  getMoviesFailed, getMoviesSuccess } from "../store/actions/getMoviesActions";


  export const fetchMovies = (page = 1, type = 'popular') => {
	return (dispatch) => {
		axios.get(`${API_PREFIX}/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
		.then((data) => {
			dispatch(getMoviesSuccess(data))
		})
		.catch((err) => getMoviesFailed(err));
	};
  };
