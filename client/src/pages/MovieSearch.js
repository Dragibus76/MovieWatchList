import React from 'react';
import Header from '../components/Header';
import MovieForm from '../components/MovieForm';

const MovieSearch = () => {
    return (
        <div className='home-page'>
            <Header/>
            <MovieForm/>
        </div>
    );
};

export default MovieSearch;