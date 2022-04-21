import React from "react";
import css from './Tabs.module.css';
import SearchBar from "./SearchBar";
import {useState, useEffect} from "react";
import MovieCards from "./MovieCards"

function Tabs() {
    const [movies, setMovie] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const getFetchMovie = async (searchValue) => {
        const apiKey = 'bba7381a'
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=${apiKey}`
        const response = await fetch(url)
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovie(responseJson.Search)
        }
    }

    useEffect(() => {
        getFetchMovie(searchValue)
    }, [searchValue])

    return (
        <div>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MovieCards movies={movies} className='movieCards' />
        </div>
    )
}

export default Tabs;

