import axios from "axios";
import { API_PREFIX } from "../constants/constants";
import {  getMoviesBySearchInit, getMoviesBySearchSuccess, getMoviesBySearchFailed } from "../store/actions/getMoviesBySearchActions";


  export const fetchMoviesBySearch = (value, page = 1) => {
	return (dispatch) => {
		dispatch(getMoviesBySearchInit())
		axios.get(
            `${API_PREFIX}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${value}&page=${page}`
        )
		.then((data) => {

			dispatch(getMoviesBySearchSuccess(data))
		})
		.catch((err) => getMoviesBySearchFailed(err));
	};
  };