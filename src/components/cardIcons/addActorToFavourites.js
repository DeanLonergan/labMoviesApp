import React, { useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const AddToFavouritesIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <PersonAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;