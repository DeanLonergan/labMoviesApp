import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveActorFromFavouritesIcon from "../components/cardIcons/removeActorFromFavourites";

const FavouriteActorsPage = () => {
  const {favourites: actorIds } = useContext(ActorsContext);

  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["person", { id: actorId }],
        queryFn: getActors,
      };
    })
  );

  const isLoading = favouriteActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    return q.data
  });
  
  return (
    <PageTemplate
      title="Favourite Actors"
      actors={actors}
      action={(actor) => {
        return <RemoveActorFromFavouritesIcon actor={actor} />
      }}
    />
  );
};

export default FavouriteActorsPage;