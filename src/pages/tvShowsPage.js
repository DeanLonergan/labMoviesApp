import React from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TVShowsPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('discoverTVShows', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShows) => {
        return <AddToFavouritesIcon tvShow={tvShows} />
      }}
    />
  );
};

export default TVShowsPage;