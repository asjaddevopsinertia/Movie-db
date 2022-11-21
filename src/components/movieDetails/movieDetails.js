import React, { Fragment, useEffect } from "react";
import { fetchMoviesById } from "../../apis/getMovieByIdApi";
import { useDispatch, useSelector } from "react-redux";
import { DetailCard } from "../../common/cards/detailCard";
import "./movieDetails.scss";
import { fetchMoviesCredit } from "../../apis/getMovieCreditApi";
import { MovieCard } from "../../common/cards/movieCard";
import { fetchSimilarMovies } from "../../apis/getSimilarMoviesApi";

export const MovieDetails = ({ id }) => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieById);
  const creditData = useSelector((state) => state.movieCredit);
  const similarMoviesData = useSelector((state) => state.similarMovies);

  const movieDataResult = movieData.movies?.data;
  const creditDataResult = creditData.movie?.data;
  const similarMoviesResult = similarMoviesData?.movies?.data;

  useEffect(() => {
    dispatch(fetchMoviesById(id));
    dispatch(fetchMoviesCredit(id));
    dispatch(fetchSimilarMovies(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="movie-detail-container">
        <div>
          <div className="backdrop"></div>
          <img
            className="banner-img"
            src={`https://image.tmdb.org/t/p/w500${movieDataResult?.backdrop_path}`}
            alt="drop"
          />

          <div className="page-width">
            <DetailCard
              img={
                movieDataResult?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDataResult?.poster_path}`
                  : null
              }
              title={movieDataResult?.title}
              genre={movieDataResult?.genres.map((x) => x.name)}
              rating={movieDataResult?.vote_average.toFixed(1)}
              language={movieDataResult?.original_language}
              tagline={movieDataResult?.tagline}
              release={movieDataResult?.release_date}
              revenue={movieDataResult?.revenue
                .toFixed(1)
                .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
              description={movieDataResult?.overview}
            />

            <h1 className="cast-head">Cast</h1>
            <div className="cast-crew">
              {creditDataResult?.cast.slice(0, 18).map((x, id) => {
                return (
                  <Fragment key={id}>
                    <MovieCard
                      img={
                        x.profile_path
                          ? `https://image.tmdb.org/t/p/w500${x.profile_path}`
                          : null
                      }
                      title={x.name}
                      subTitle={x.character}
                    />
                  </Fragment>
                );
              })}
            </div>

            <h1 className="cast-head">Crew</h1>
            <div className="cast-crew">
              {creditDataResult?.crew.slice(0, 18).map((x,id) => {
                return (
                  <Fragment key={id}>
                    <MovieCard
                      img={
                        x.profile_path
                          ? `https://image.tmdb.org/t/p/w500${x.profile_path}`
                          : null
                      }
                      title={x.name}
                      subTitle={x.job}
                    />
                  </Fragment>
                );
              })}
            </div>

            <h1 className="cast-head">Similar Movies</h1>
            <div className="cast-crew">
              {similarMoviesResult?.results.slice(0, 18).map((x, id) => {
                return (
                  <Fragment key={id}>
                    <MovieCard
                      img={
                        x.poster_path
                          ? `https://image.tmdb.org/t/p/w500${x.poster_path}`
                          : null
                      }
                      title={x.title}
                      subTitle={x.release_date}
                      rating={x.vote_average.toFixed(1)}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
