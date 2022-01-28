import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import WatchList from './pages/WatchList';
import MovieSearch from './pages/MovieSearch';
import Home from './pages/Home';
import TvSearch from './pages/TvSearch';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/films" element={<MovieSearch/>}/>
        <Route path="/series" element={<TvSearch/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;