import React from "react";
import { MovieDetails } from "../components/movieDetails/movieDetails";
import { useParams } from "react-router-dom"

export const Detail = () => {
    const { id } = useParams()
    return(
        <>
            <MovieDetails id={id}/>
        </>
    )
}