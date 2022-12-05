import React, { useContext } from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { TVShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeTVShowFromFavourites";

const FavouriteTVShowsPage = () => {
  const {favourites: tvShowIds } = useContext(TVShowsContext);

  const favouriteTVShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTVShow,
      };
    })
  );

  const isLoading = favouriteTVShowQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTVShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Favourite TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromFavourites tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTVShowsPage;