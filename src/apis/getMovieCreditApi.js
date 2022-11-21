import axios from "axios";
import { API_PREFIX } from "../constants/constants";
import {  getMovieCreditInit, getMovieCreditSuccess, getMovieCreditFailed } from "../store/actions/getMovieCreditActions";


  export const fetchMoviesCredit = (id) => {
	return (dispatch) => {
		dispatch(getMovieCreditInit())
		axios.get(
            `${API_PREFIX}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
        )
		.then((data) => {
			dispatch(getMovieCreditSuccess(data))
		})
		.catch((err) => getMovieCreditFailed(err));
	};
  };