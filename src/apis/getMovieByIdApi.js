import axios from "axios";
import { API_PREFIX } from "../constants/constants";
import {  getMoviesByIdInit, getMoviesByIdSuccess, getMoviesByIdFailed } from "../store/actions/getMovieByIdActions";

  export const fetchMoviesById = (id) => {
	return (dispatch) => {
		dispatch(getMoviesByIdInit())
		axios.get(`${API_PREFIX}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
		.then((data) => {
			dispatch(getMoviesByIdSuccess(data))
		})
		.catch((err) => getMoviesByIdFailed(err));
	};
  };