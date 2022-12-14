import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

export const Header = () => {
    return(
        <>
        <div className="header flex justify-center align-center">
            <div className="fixed">
            <div className="heading-container">
                <div>
                <Link to = "/" >
                <h1>THE MOVIE DB</h1>
                </Link>
                </div>

                <div>
                    
                <a onClick={() => {window.location.href="/graph"}} target="__blank">
                    <h3>Graph</h3>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}