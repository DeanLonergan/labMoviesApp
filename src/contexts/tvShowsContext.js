import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavourites = (tvShow) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tvShow.id)) {
      newFavourites.push(tvShow.id);
    }
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (tvShow) => {
    setFavourites( favourites.filter(
      (tId) => tId !== tvShow.id
    ) )
  };

  const addToMustWatch = (tvShow) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(tvShow.id)) {
      newMustWatch.push(tvShow.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch)
  };

  const removeFromMustWatch = (tvShow) => {
    setMustWatch( mustWatch.filter(
      (tId) => tId !== tvShow.id
    ) )
  };

  const addReview = (tvShow, review) => {
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  return (
    <TVShowsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;