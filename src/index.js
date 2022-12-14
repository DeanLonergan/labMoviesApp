import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import TVShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorsPage from "./pages/actorsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import TVShowsPage from "./pages/tvShowsPage";
import TVShowPage from "./pages/tvShowDetailsPage";
import FavouriteTVShowsPage from "./pages/favouriteTVShowsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <ActorsContextProvider>
        <TVShowsContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route exact path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
            <Route exact path="/actors/favourites" element={<FavouriteActorsPage />} />
            <Route path="/tvshows" element={<TVShowsPage />} />
            <Route path="/tvshows/:id" element={<TVShowPage />} />
            <Route exact path="/tvshows/favourites" element={<FavouriteTVShowsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </TVShowsContextProvider>
        </ActorsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);