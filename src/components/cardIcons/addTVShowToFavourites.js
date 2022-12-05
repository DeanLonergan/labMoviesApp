import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TVShowsContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(tvShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;