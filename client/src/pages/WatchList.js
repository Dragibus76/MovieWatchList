import axios from "axios";
import React, { useEffect, useState } from "react";


import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import TvCard from "../components/TvCard";

const WatchList = () => {
  const [listData, setListData] = useState([]);
  const [listData2, setListData2] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=84483b5fbf72908a4d3869434376a6ba&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
    let tvsId = window.localStorage.tvs
      ? window.localStorage.tvs.split(",")
      : [];

    for (let i = 0; i < tvsId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${tvsId[i]}?api_key=84483b5fbf72908a4d3869434376a6ba&language=fr-FR`
        )
        .then((res) => setListData2((listData2) => [...listData2, res.data]));
    }
  }, []);

  

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie, tv) => <MovieCard movie={movie} key={movie.id} /> )
          
        ) : (
          <h2 className="subtitle_Tv_Watchlist">Aucun coup de coeur pour le moment</h2>
        )}
        {listData2.length > 0 ? (
          listData2.map((tv) => <TvCard tv={tv} key={tv.id} />)
        ) : (
          <h2 className="subtitle_Tv_Watchlist">Aucun coup de coeur pour le moment</h2>
        )}
        
      </div>
      
    </div>
  );
};

export default WatchList;