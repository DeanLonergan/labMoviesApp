import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddActorToFavouritesIcon from '../components/cardIcons/addActorToFavourites'

const ActorsPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('discover-actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const actors = data.results;

  return (
    <PageTemplate
      title="Discover Actors"
      actors={actors}
      action={(actor) => {
        return <AddActorToFavouritesIcon actor={actor} />
      }}
    />
  );
};

export default ActorsPage;