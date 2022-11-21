import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../apis/getMoviesApi";
import { fetchMoviesBySearch } from "../../apis/getMoviesBySearchApi";
import { MovieCard } from "../../common/cards/movieCard";
import { Search } from "../search/search";
import "./moviesList.scss";
import Pagination from "rc-pagination";
import { Link } from "react-router-dom";
import { Sort } from "../sort/sort";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies);
  const searchData = useSelector((state) => state.moviesBySearch);
  const [search, setSearchValue] = useState("");
  const [checked, setCheckedValue] = useState("popular");

  const searchDataResult = searchData?.movies?.data?.results
  const movieDataResult = movieData?.movies?.data?.results

  const onSearchChange = (e) => {
    if (e.target.value) {
      setSearchValue(e.target.value);
      dispatch(fetchMoviesBySearch(e.target.value));
    } else {
      setSearchValue("")
    }
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const onPageChange = (e) => {
    window.scrollTo(0, 0)
    if (search) {
      dispatch(fetchMoviesBySearch(search, e));
    } else dispatch(fetchMovies(e));
  };

  const onSortClick = (value) => {

    setSearchValue("")
    dispatch(fetchMovies(1, value));
    setCheckedValue(value);
  };


  return (
    <>
      <div className="page-width">
        <div className="flex justify-between align-center col">
          <div>
            <h1 className="hide">Movies</h1>
          </div>

          <div>
            <Search handleSearch={onSearchChange} value={search}/>
          </div>
        </div>
        <div className="seperator"></div>

        <Sort onSortClick={onSortClick} checked={checked} />
        <div className="movie-grid">
          {search && searchDataResult?.length > 0
            ? searchDataResult?.map((data) => {
                return (
                  <Fragment key={data.id}>
                    <Link to={`/details/${data.id}`}>
                      <MovieCard
                        img={
                          data?.poster_path
                            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                            : null
                        }
                        title={data.title || data.original_name}
                        date={
                          data && data.release_date
                            ? data.release_date
                            : data.first_air_date
                        }
                        rating={data.vote_average.toFixed(1)}
                      />
                    </Link>
                  </Fragment>
                );
              })
            :searchDataResult?.length === 0 ? 
              <div className="no-result">NO RESULTS FOUND</div>
            : movieDataResult?.map((data) => {
                return (
                  <Fragment key={data.id}>
                    <Link to={`/details/${data.id}`}>
                      <MovieCard
                        img={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        title={data.title || data.original_name}
                        date={
                          data && data.release_date
                            ? data.release_date
                            : data.first_air_date
                        }
                        rating={data.vote_average.toFixed(1)}
                      />
                    </Link>
                  </Fragment>
                );
              })}
        </div>


        {searchDataResult?.length > 0 || movieDataResult?.length > 0 ? (
          <div className="paginator">
            <Pagination
              showLessItems
              total={
                search
                  ? searchData?.movies?.data?.total_pages
                  : movieData?.movies?.data?.total_pages
              }
              pageSize={20}
              onChange={onPageChange}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
