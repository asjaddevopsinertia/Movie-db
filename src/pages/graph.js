import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../apis/getMoviesApi";
import { MovieGraph } from "../components/graph/movieGraph";

export const Graph = () => {
  
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies(1, "top_rated"));
  }, [dispatch]);

  

  const Result = movieData?.movies?.data?.results?.slice(0, 10);

  const graphData1 = Result?.map((x) => {
    return {
      category: x.title,
      quantity: x.vote_average,
    };
  });

  const graphData2 = Result?.map((x) => {
    return {
      category: x.title,
      quantity: x.vote_count,
    };
  });
  
  return (
    <>
      {graphData1 ? <MovieGraph data={graphData1} legendTitle="Total Rating Out of 10" id={1} toolTip="Total Rating" xAxis="Total Rating" /> : ''}
      {graphData2 ? <MovieGraph data={graphData2} length={Math.max(...graphData2.map(o => o.quantity))} legendTitle="Total Number Of Times Movie Rated" id={2} toolTip="Times Rated" xAxis="Total Number of Times Rated"/> : ''}
    </>
  );
};
